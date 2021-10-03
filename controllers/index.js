const router = require('express').Router();

// Dashboard routes
const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);

// Home routes
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

// API routes
const apiRoutes = require('./api');
const upload = require('./uploads/multer.js');
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
