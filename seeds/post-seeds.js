const { Post } = require('../models');

const postdata = [
  {
    name: 'Charlie',
    pet_type: 'dog',
    user_id: 10,
    image:
      'https://www.a2048.com/wp-content/uploads/2019/07/bc4a27df619fe52ade14f0d5a82d0f69.jpg',
  },
  {
    name: 'Casey',
    pet_type: 'cat',
    user_id: 8,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0055_german_spitz_klein.jpg?itok=W2XF-Qk1',
  },
  {
    name: 'Bert',
    pet_type: 'monkey',
    user_id: 1,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-03/BREED%20Hero%20Chiweenie.jpg?itok=Eb5Gz9Eh',
  },
  {
    name: 'Nancy',
    pet_type: 'lion',
    user_id: 4,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0006_basenji_0.jpg?itok=g8UJcolE',
  },
  {
    name: 'Big Bob',
    pet_type: 't-rex',
    user_id: 7,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/dandie_dinmont_terrier.jpg?itok=xVUVL_p-',
  },
  {
    name: 'Oliver',
    pet_type: 'turkey',
    user_id: 4,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/basset_bleu_de_gascogne.jpg?itok=jrudaxAn',
  },
  {
    name: 'Cassandra',
    pet_type: 'hippopotamus',
    user_id: 1,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0008_basset_hound_0.jpg?itok=GG5rW9OG',
  },
  {
    name: 'Karen',
    pet_type: 'sheep',
    user_id: 1,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0010_bearded_collie_0.jpg?itok=TW4BiB0T',
  },
  {
    name: 'Snoopy',
    pet_type: 'pig',
    user_id: 9,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0034_chihuahua_smooth.jpg?itok=f8LMIDz0',
  },
  {
    name: 'Charlie',
    pet_type: 'parrot',
    user_id: 5,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0016_bichon_frise.jpg?itok=aY3HlFBj',
  },
  {
    name: 'Donald',
    pet_type: 'lamma',
    user_id: 3,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/CROSSBREED%20Hero_0011_borador.jpg?itok=4Fy_a5Pc',
  },
  {
    name: 'Lonny',
    pet_type: 'alpaca',
    user_id: 10,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0030_Bullmastiff.jpg?itok=EpnDB9q_',
  },
  {
    name: 'Delilah',
    pet_type: 'chicken',
    user_id: 8,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0031_Cairn_terrier.jpg?itok=dng6o592',
  },
  {
    name: 'Maria',
    pet_type: 'horse',
    user_id: 3,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0018_border_collie.jpg?itok=Z_iac2So',
  },
  {
    name: 'Francisco',
    pet_type: 'wolf',
    user_id: 3,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/chow_chow_rough.jpg?itok=5TprSOFG',
  },
  {
    name: 'The Don Mega',
    pet_type: 'tiger',
    user_id: 7,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero%20Australian%20Terrier_0.jpg?itok=fpftBRzI',
  },
  {
    name: 'Marcus',
    pet_type: 'rabbits',
    user_id: 6,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0125_spaniel_english_springer.jpg?itok=WL3Ae1vF',
  },
  {
    name: 'Terry',
    pet_type: 'gecko',
    user_id: 4,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0038_dachshund_long_standard.jpg?itok=D-Eiw12p',
  },
  {
    name: 'Daniel',
    pet_type: 'snakes',
    user_id: 6,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0000_afghan_hound_0.jpg?itok=vkb8L2gC',
  },
  {
    name: 'Andrew',
    pet_type: 'whale',
    user_id: 7,
    image:
      'https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0044_dalmatian.jpg?itok=ca2RWlxM',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
