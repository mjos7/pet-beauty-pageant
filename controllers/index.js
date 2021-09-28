const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

// const uploads = require('./uploads/cloudinary');
// router.use('/image', uploads);

const apiRoutes = require('./api');
const upload = require('./uploads/multer.js');
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;
