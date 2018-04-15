const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const differenceInDays = require('date-fns/difference_in_days');
const differenceInHours = require('date-fns/difference_in_hours');
const differenceInMinutes = require('date-fns/difference_in_minutes');
const admin = require('firebase-admin');
const chunk = require('lodash/chunk');

admin.initializeApp();

const calculate_score = (votes, item_hour_age, gravity = 1.8) =>
  (votes - 1) / Math.pow(item_hour_age + 2, gravity);

const obj_to_array = obj =>
  Object.keys(obj).map(key => Object.assign({}, obj[key], { post_key: key }));

exports.posts_with_computed_scores = functions.https.onRequest((request, response) => {
  const { page_index, count_per_page } = request.query;
  admin
    .database()
    .ref('/news_postings')
    .once('value')
    .then(snapshot => snapshot.val())
    .then(home_page_posts => {
      if (home_page_posts === null) {
        return cors(request, response, () => response.end(JSON.stringify({ result: [] })));
      } else {
        const now = new Date();
        const posts = obj_to_array(home_page_posts);
        const mapped = posts.map((post, index) => {
          const their_time = new Date(post.posted_at);
          const day_diff = differenceInDays(their_time, now);
          const hour_diff = differenceInHours(their_time, now);
          const minute_diff = differenceInMinutes(their_time, now);
          const ranking_score = calculate_score(post.up_votes, hour_diff);
          return { day_diff, hour_diff, minute_diff, ranking_score, index, post };
        });
        mapped.sort(
          ({ ranking_score: ranking_score_first }, { ranking_score: ranking_score_second }) => {
            if (ranking_score_first > ranking_score_second) return -1;
            if (ranking_score_first < ranking_score_second) return 1;
            return 0;
          }
        );
        const with_scores = mapped.map(
          ({ index, day_diff, hour_diff, minute_diff, ranking_score }) => {
            const post = posts[index];
            post.day_diff = day_diff;
            post.hour_diff = hour_diff;
            post.minute_diff = minute_diff;
            post.ranking_score = ranking_score;
            return post;
          }
        );
        const result = chunk(with_scores, Number(count_per_page));
        const choice = result[Number(page_index)];
        return cors(request, response, () =>
          response.end(JSON.stringify({ result: choice !== undefined ? choice : [] }))
        );
      }
    })
    .catch(error => {
      return cors(request, response, () => response.end(JSON.stringify({ error: error.message })));
    });
});
