const { Post } = require('../models');

const postdata = [
  {
    name: 'Charlie',
    pet_type: 'dog',
    user_id: 10,
  },
  {
    name: 'Casey',
    pet_type: 'cat',
    user_id: 8,
  },
  {
    name: 'Bert',
    pet_type: 'monkey',
    user_id: 1,
  },
  {
    name: 'Nancy',
    pet_type: 'lion',
    user_id: 4,
  },
  {
    name: 'Big Bob',
    pet_type: 't-rex',
    user_id: 7,
  },
  {
    name: 'Oliver',
    pet_type: 'turkey',
    user_id: 4,
  },
  {
    name: 'Cassandra',
    pet_type: 'hippopotamus',
    user_id: 1,
  },
  {
    name: 'Karen',
    pet_type: 'sheep',
    user_id: 1,
  },
  {
    name: 'Snoopy',
    pet_type: 'pig',
    user_id: 9,
  },
  {
    name: 'Charlie',
    pet_type: 'parrot',
    user_id: 5,
  },
  {
    name: 'Donald',
    pet_type: 'lamma',
    user_id: 3,
  },
  {
    name: 'Lonny',
    pet_type: 'alpaca',
    user_id: 10,
  },
  {
    name: 'Delilah',
    pet_type: 'chicken',
    user_id: 8,
  },
  {
    name: 'Maria',
    pet_type: 'horse',
    user_id: 3,
  },
  {
    name: 'Francisco',
    pet_type: 'wolf',
    user_id: 3,
  },
  {
    name: 'The Don Mega',
    pet_type: 'tiger',
    user_id: 7,
  },
  {
    name: 'Marcus',
    pet_type: 'rabbits',
    user_id: 6,
  },
  {
    name: 'Terry',
    pet_type: 'gecko',
    user_id: 4,
  },
  {
    name: 'Daniel',
    pet_type: 'snakes',
    user_id: 6,
  },
  {
    name: 'Andrew',
    pet_type: 'whale',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
