const { Post } = require('../models');

const postdata = [
  {
    title: 'Charlie',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10,
  },
  {
    title: 'Casey',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8,
  },
  {
    title: 'Bert',
    post_url:
      'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
  },
  {
    title: 'Nancy',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
  },
  {
    title: 'Big Bob',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
  },
  {
    title: 'Oliver',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4,
  },
  {
    title: 'Cassandra',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
  },
  {
    title: 'Karen',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
  },
  {
    title: 'Snoopy',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
  },
  {
    title: 'Charlie',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
  },
  {
    title: 'Donald',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
  },
  {
    title: 'Lonny',
    post_url:
      'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
  },
  {
    title: 'Delilah',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
  },
  {
    title: 'Maria',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
  },
  {
    title: 'Francisco',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
  },
  {
    title: 'The Don Mega',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
  },
  {
    title: 'Marcus',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
  },
  {
    title: 'Terry',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4,
  },
  {
    title: 'Daniel',
    post_url:
      'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
  },
  {
    title: 'Andrew',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
