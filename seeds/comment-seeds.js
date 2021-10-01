const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'How cute is that!',
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text:
      'Adorable!',
    user_id: 6,
    post_id: 4,
  },
  {
    comment_text: 'I grew up with one like this',
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      'Very cute!',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'I want one!',
    user_id: 7,
    post_id: 1,
  },
  {
    comment_text:
      'My friend has one like this and I get to hang out with her quite a bit. Very gentle',
    user_id: 6,
    post_id: 3,
  },
  {
    comment_text: 'Sweet.',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      'Gorgeous',
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text:
      'The best!',
    user_id: 1,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
