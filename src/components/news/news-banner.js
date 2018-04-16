import React from 'react';

import styles from './news-banner.module.css';

export default ({
  posted_at,
  day_diff,
  hour_diff,
  minute_diff,
  poster,
  post_key,
  title,
  up_votes,
}) => {
  // console.log(props);
  return (
    <div className={styles.PostBannerRow}>
      <p>foo</p>
    </div>
  );
};
