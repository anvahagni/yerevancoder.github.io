import React from 'react';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { obj_to_array, is_number, computed_news_posts } from '../../utils/funcs';
import { NEWS_POSTINGS_PER_PAGE, ROUTES } from '../../utils/constants';
import { total_news_posting_count_ref, news_postings_ref } from '../../utils/db';
import TEMP_DATA from './temp-data';
import NewsBanner from './news-banner';
import styles from './news.module.css';

export default withRouter(
  class News extends React.Component {
    state = { news_postings: new Map(), current_page_index: null, total_pages_count: null };

    static contextTypes = { submit_new_news_post: PropTypes.func };

    query_total_news_postings_count = () =>
      total_news_posting_count_ref.once('value').then(snap_shot => Number(snap_shot.val()));

    test_push_data = async () => {
      const { submit_new_news_post } = this.context;
      for (const s of TEMP_DATA) {
        await submit_new_news_post(s);
      }
      this.forceUpdate();
    };

    current_page_number = () => {
      const { search } = this.props.location;
      const page_params = new URLSearchParams(search);
      const value = page_params.get('page');
      if (value === null) return null;
      const is_num = is_number(value);
      return is_num && +value >= 2 ? +value : null;
    };

    async componentDidMount() {
      const { history } = this.props;
      const { news_postings } = this.state;
      const total_count = await this.query_total_news_postings_count();
      const total_pages_count = Math.ceil(total_count / NEWS_POSTINGS_PER_PAGE);
      const page = this.current_page_number();
      if (page === null || page > total_pages_count) {
        const { result, error } = await computed_news_posts({
          page_index: 0,
          count_per_page: NEWS_POSTINGS_PER_PAGE,
        });
        if (result) {
          news_postings.set(0, result);
          this.setState(
            () => ({ current_page_index: 0, news_postings, total_pages_count }),
            () => history.push(ROUTES.LATEST_NEWS)
          );
        }
      } else {
        const current_page_index = +page;
        //   const page_posts = await news_postings_ref
        //     .orderByChild('post_creation_id')
        //     .startAt(total_count - NEWS_POSTINGS_PER_PAGE * +page)
        //     .limitToFirst(NEWS_POSTINGS_PER_PAGE)
        //     .once('value')
        //     .then(snapshot => snapshot.val());
        //   news_postings.set(current_page_index, page_posts ? obj_to_array(page_posts) : []);
        this.setState(() => ({ current_page_index, news_postings, total_pages_count }));
      }
    }

    make_posts() {
      const { news_postings, current_page_index } = this.state;
      if (current_page_index === null) return null;
      else {
        // By this point we can assume the data exists bc of CDM
        const postings = news_postings.get(current_page_index);
        if (postings === null) return null;
        else {
          console.log({ postings });
          return postings.map(post => {
            return <NewsBanner {...post} key={`${Math.random()}`} />;
          });
        }
      }
    }

    render() {
      const { current_page_index } = this.state;
      const num = Number(current_page_index);
      return (
        <div>
          <div className={styles.LatestNewsContainer}>
            {this.make_posts()}
            <div className={styles.TempTestContainer}>
              <p>Current page: {num}</p>
              <input type={'button'} onClick={this.test_push_data} value={'Push Test Data'} />
              <input
                type={'button'}
                onClick={this.next_page}
                value={`Go to next page: ${num + 1}`}
              />
            </div>
          </div>
        </div>
      );
    }
  }
);
