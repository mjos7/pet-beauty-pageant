const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const upload = require('./controllers/uploads/multer')
const cloudinary = require('./controllers/uploads/cloudinary');
const fs = require('fs');
const { url } = require('inspector');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use('/upload-images',upload.array('image'),async(req, res)=>{
  const uploader = async (path) => await cloudinary.uploads(path, 'Images')
  if (req.method === 'POST') {
    const urls = [];
    const files = req.files;
    
    for(const files of files){
      const { path } = file;

      const newPath = await uploader(path);
      url.push(newPath);
      fs.unlinkSync(path);
    }

    res.status(200).json({
      message: 'Images uploaded succesfully!',
      data:urls
    })
  }
  else{
    res.status(405).json({
      err:'Images not uploaded successfully.'
    })
  }
});

// turn on routes
 app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`--------------Now listening on PORT ${PORT}-----------------`)
  );
});
