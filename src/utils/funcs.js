import { firebase, db } from './db';
import {
  COMPUTED_POSTS_CLOUD_FUNCTION_LOCALHOST,
  __DEV__,
  COMPUTED_POSTS_CLOUD_FUNCTION,
} from './constants';

export const query_my_freelance_submission = () => {
  const current_user = firebase.auth().currentUser;
  return db
    .ref(`users/${current_user.uid}/my-freelance-submission`)
    .once('value')
    .then(snapshot => snapshot.val());
};

export const query_my_hiring_post_submissions = () => {
  const current_user = firebase.auth().currentUser;
  return db
    .ref(`users/${current_user.uid}/my-hiring-board-submissions`)
    .once('value')
    .then(snapshot => snapshot.val());
};

export const updateByPropertyName = (propertyName, value) => () => ({ [propertyName]: value });

export const is_number = s => /\d/.test(s);

export const obj_to_array = obj => {
  const data = Object.keys(obj).map(key => ({ ...obj[key], post_key: key }));
  data.reverse();
  return data;
};

export const no_op = () => null;

export const email_new_job_body = job_detail =>
  encodeURI(`I am interested in your job: ${job_detail} `);

export const computed_news_posts = ({ page_index, count_per_page }) => {
  const params = new URLSearchParams();
  params.append('page_index', page_index);
  params.append('count_per_page', count_per_page);
  const query = `${
    __DEV__ ? COMPUTED_POSTS_CLOUD_FUNCTION_LOCALHOST : COMPUTED_POSTS_CLOUD_FUNCTION
  }?${params.toString()}`;
  return fetch(query).then(r => r.json());
};
