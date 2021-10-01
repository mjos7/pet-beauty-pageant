const { Post } = require('../models');

const postdata = [
  {
    name: 'Casey',
    pet_type: 'German Spitz Klein',
    user_id: 8,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0055_german_spitz_klein.jpg?itok=W2XF-Qk1',
  },
  {
    name: 'Bert',
    pet_type: 'Chiweenie',
    user_id: 1,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-03/BREED%20Hero%20Chiweenie.jpg?itok=Eb5Gz9Eh',
  },
  {
    name: 'Nancy',
    pet_type: 'Basenji',
    user_id: 4,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0006_basenji_0.jpg?itok=g8UJcolE',
  },
  {
    name: 'Big Bob',
    pet_type: 'Dandie Dinmont Terrier',
    user_id: 7,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/dandie_dinmont_terrier.jpg?itok=xVUVL_p-',
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
