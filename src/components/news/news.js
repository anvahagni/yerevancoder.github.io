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
import { ranking_sort } from '../../../src-common';

const INIT_STATE = {
  news_postings: new Map(),
  current_page_index: null,
  total_pages_count: null,
  error: null,
};

const redirect_to_homepage = new Set([0, 1]);

export default withRouter(
  class News extends React.Component {
    state = { ...INIT_STATE };

    static contextTypes = {
      submit_new_news_post: PropTypes.func,
      authenticated_user: PropTypes.func,
    };

    query_total_news_postings_count = () =>
      total_news_posting_count_ref.once('value').then(snap_shot => Number(snap_shot.val()));

    test_push_data = async () => {
      const { submit_new_news_post, authenticated_user } = this.context;
      const user = authenticated_user();
      if (user) {
        for (const s of TEMP_DATA) {
          await submit_new_news_post(s);
        }
        this.forceUpdate();
      } else {
        this.setState(() => ({ error: new Error('Must be logged in to push test data') }));
      }
    };

    current_page_number = () => {
      const { search } = this.props.location;
      const page_params = new URLSearchParams(search);
      const value = page_params.get('page');
      if (value === null) return 0;
      const is_num = is_number(value);
      return is_num && +value >= 2 ? Number(value) : 0;
    };

    async componentDidMount() {
      const { history } = this.props;
      const { news_postings } = this.state;
      const total_count = await this.query_total_news_postings_count();
      const total_pages_count = Math.ceil(total_count / NEWS_POSTINGS_PER_PAGE);
      const page = this.current_page_number();
      const { result, error } = await computed_news_posts({
        page_index: page,
        count_per_page: NEWS_POSTINGS_PER_PAGE,
      });
      console.log({ result, error, page });
      if (result) {
        news_postings.set(page, result);
        this.setState(
          () => ({ current_page_index: page, news_postings, total_pages_count }),
          () => {
            if (page > total_pages_count || redirect_to_homepage.has(page)) {
              history.push(ROUTES.LATEST_NEWS);
            }
          }
        );
      }
    }

    make_posts() {
      const { news_postings, current_page_index } = this.state;
      if (current_page_index === null) return null;
      else {
        // By this point we can assume the data exists bc of CDM
        const postings = news_postings.get(current_page_index);
        if (postings === null || postings === undefined) return null;
        else {
          const p = Object.values(postings);
          p.sort(ranking_sort);
          return p.map(post => {
            return <NewsBanner {...post} key={`${Math.random()}`} />;
          });
        }
      }
    }

    render() {
      const { current_page_index, error } = this.state;
      const num = Number(current_page_index);
      return (
        <div>
          <div className={styles.LatestNewsContainer}>
            {error === null ? (
              this.make_posts()
            ) : (
              <p className={styles.ErrorOccured}>Error: {error.message}</p>
            )}
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
