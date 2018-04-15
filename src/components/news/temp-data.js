import addMinutes from 'date-fns/add_minutes';

const starting_date = new Date();

export default [
  {
    up_votes: 0,
    poster: 'display name',
    title: 'Something code',
    posted_at: addMinutes(starting_date, 10).getTime(),
  },
  {
    up_votes: 2,
    poster: 'display name2',
    title: 'Something else',
    posted_at: addMinutes(starting_date, 12).getTime(),
  },
  {
    up_votes: 3,
    poster: 'display name3',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 13).getTime(),
  },
  {
    up_votes: 3,
    poster: 'display name4',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 14).getTime(),
  },
  {
    up_votes: 3,
    poster: 'display name5',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 15).getTime(),
  },
  {
    up_votes: 5,
    poster: 'display name6',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 16).getTime(),
  },
  {
    up_votes: 3,
    poster: 'display name7',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 17).getTime(),
  },
  {
    up_votes: 3,
    poster: 'display name8',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 18).getTime(),
  },
  {
    up_votes: 2,
    poster: 'display name9',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 19).getTime(),
  },
  {
    up_votes: 5,
    poster: 'display name10',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 20).getTime(),
  },
  {
    up_votes: 2,
    poster: 'display name11',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 21).getTime(),
  },
  {
    up_votes: 10,
    poster: 'display name12',
    title: 'Somethign third',
    posted_at: addMinutes(starting_date, 22).getTime(),
  },
];
