const router = require('express').Router();

const apiRoutes = require('./api/');
const homePageRoutes = require('./homepageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);

router.use('/dashboard', dashboardRoutes);
router.use('/', homePageRoutes);

module.exports = router;