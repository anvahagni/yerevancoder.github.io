module.exports = {
  ranking_sort: (
    { ranking_score: ranking_score_first },
    { ranking_score: ranking_score_second }
  ) => {
    if (ranking_score_first > ranking_score_second) return -1;
    if (ranking_score_first < ranking_score_second) return 1;
    return 0;
  },
  NEWS_POSTINGS_PER_PAGE: 6,
  will_redirect_to_homepage: new Set([0, 1]),
};
