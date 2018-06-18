const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const differenceInDays = require('date-fns/difference_in_days');
const differenceInHours = require('date-fns/difference_in_hours');
const differenceInMinutes = require('date-fns/difference_in_minutes');
const admin = require('firebase-admin');
const chunk = require('lodash/chunk');

const { ranking_sort, NEWS_POSTINGS_PER_PAGE, will_redirect_to_homepage } = require('./common');

admin.initializeApp();

const calculate_score = (votes, item_hour_age, gravity = 1.8) =>
  (votes - 1) / Math.pow(Math.abs(item_hour_age) + 2, gravity);

const obj_to_array = obj =>
  Object.keys(obj).map(key => Object.assign({}, obj[key], { post_key: key }));

const all_news_snapshot = () =>
  admin
    .database()
    .ref('/news_postings')
    .orderByChild('ranking_score')
    .once('value')
    .then(snapshot => snapshot.val())
    .then(rows => (rows !== null ? rows : []));

const compute_scores = () =>
  all_news_snapshot().then(rows => {
    const now = new Date();
    const posts = obj_to_array(rows);
    const mapped = posts.map((post, index) => {
      const their_time = new Date(post.posted_at);
      const day_diff = differenceInDays(now, their_time);
      const hour_diff = differenceInHours(now, their_time);
      const minute_diff = differenceInMinutes(now, their_time);
      const ranking_score = calculate_score(post.up_votes, hour_diff);
      return { day_diff, hour_diff, minute_diff, ranking_score, index, post };
    });
    mapped.sort(ranking_sort);
    return mapped.map(({ index, day_diff, hour_diff, minute_diff, ranking_score }) => {
      const post = posts[index];
      post.day_diff = day_diff;
      post.hour_diff = hour_diff;
      post.minute_diff = minute_diff;
      post.ranking_score = ranking_score;
      return post;
    });
  });

const computed_scores_for_db_update = (accum, current_value) => {
  const { post_key } = current_value;
  accum[`/news_postings/${post_key}`] = current_value;
  return accum;
};

const total_count_news_count = () =>
  admin
    .database()
    .ref('total_news_posting_count')
    .once('value')
    .then(snap_shot => Number(snap_shot.val()));

const home_page_snapshot = limit =>
  admin
    .database()
    .ref('/news_postings')
    .orderByChild('ranking_score')
    .limitToLast(NEWS_POSTINGS_PER_PAGE)
    .once('value')
    .then(snapshot => snapshot.val());

const last_time_computed_scores_snapshot = () =>
  admin
    .database()
    .ref('/last-time-recomputed-scores')
    .once('value')
    .then(snapshot => snapshot.val());

const MINUTES_TILL_FULL_RECOMPUTE = 300;

const needs_hard_recompute = () =>
  last_time_computed_scores_snapshot()
    .then(last_time => Promise.all([last_time === null ? null : new Date(last_time), new Date()]))
    .then(([last_time, now]) => {
      const min_diff = Math.abs(differenceInMinutes(now, last_time));
      return last_time === null ? true : min_diff >= MINUTES_TILL_FULL_RECOMPUTE;
    });

const should_use_homepage = ({ page_index }) =>
  total_count_news_count().then(total_count => {
    const total_pages_count = Math.ceil(total_count / NEWS_POSTINGS_PER_PAGE);
    return page_index > total_pages_count || will_redirect_to_homepage.has(page_index);
  });

exports.front_page_news = functions.https.onCall((data, context) => {
  console.log(context);
  return {
    example: 10,
    more: 'hello',
  };
});

exports.posts_with_computed_score = functions.https.onCall((data, context) => {
  const { page_index: _page_index_ } = data;
  const page_index = Number(_page_index_);
  return Promise.all([needs_hard_recompute(), should_use_homepage({ page_index })])
    .then(([needs_hard_recompute, use_home_page]) => {
      if (needs_hard_recompute === false && use_home_page === true) {
        return Promise.all([needs_hard_recompute, home_page_snapshot(), use_home_page]);
      } else if (needs_hard_recompute === true && use_home_page === true) {
        return Promise.all([needs_hard_recompute, compute_scores(), use_home_page]);
      } else if (needs_hard_recompute === true && use_home_page === false) {
        return Promise.all([needs_hard_recompute, compute_scores(), use_home_page]);
      } else {
        // needs_hard_recompute === false && use_home_page === false
        return Promise.all([needs_hard_recompute, all_news_snapshot(), use_home_page]);
      }
    })
    .then(([needs_hard_recompute, posts_results, use_home_page]) => {
      const posts = obj_to_array(posts_results);
      if (needs_hard_recompute === false && use_home_page === false) {
        posts.sort(ranking_sort);
      }
      const grouped = chunk(posts, NEWS_POSTINGS_PER_PAGE);
      const result = use_home_page
        ? grouped[0] !== undefined
          ? grouped[0]
          : []
        : grouped[page_index - 1];
      return Promise.all([needs_hard_recompute, posts_results]);
    })
    .then(([needs_hard_recompute, posts_results]) => {
      if (needs_hard_recompute) {
        return Promise.all([
          posts_results,
          admin
            .database()
            .ref('/last-time-recomputed-scores')
            .set(new Date().getTime()),
        ]);
      } else return Promise.all([{}]);
    })
    .then(([posts_results]) => {
      const updates = Object.values(posts_results).reduce(computed_scores_for_db_update, {});
      if (Object.keys(updates).length !== 0) {
        return admin
          .database()
          .ref()
          .update(updates);
      } else return null;
    });
});
