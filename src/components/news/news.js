import React from 'react';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';

import { obj_to_array } from '../../utils/funcs';
import { NEWS_POSTINGS_PER_PAGE } from '../../utils/constants';
import { news_postings_ref, total_news_posting_count_ref } from '../../utils/db';

const TEMP_DATA = [
  { poster: 'display name', title: '' },
  { poster: 'display name', title: '' },
  { poster: 'display name', title: '' },
];

export default withRouter(
  class News extends React.Component {
    state = { news_postings: {} };

    query_total_news_postings_count = () =>
      total_news_posting_count_ref.once('value').then(snap_shot => Number(snap_shot.val()));

    query_all_news_postings = () =>
      total_news_posting_count_ref.once('value').then(snap_shot => {
        const data = snap_shot.val();
        if (data) return obj_to_array(data);
        else return TEMP_DATA;
      });

    componentDidMount() {
      const { search } = this.props.location;
      const page_params = new URLSearchParams(search);
      const query_params = Array.from(page_params.entries()).map(([k, v]) => ({ [k]: v }));

      const page = page_params.get('page');
      if (page) {
        //
        this.query_total_news_postings_count().then(count => {
          return news_postings_ref.orderByChild('date_posted').limitToFirst(NEWS_POSTINGS_PER_PAGE);
        });
      } else {
        // Must be on homepage
      }
    }

    render() {
      console.log(this.props);
      return (
        <div>
          <p>hi</p>
        </div>
      );
    }
  }
);
