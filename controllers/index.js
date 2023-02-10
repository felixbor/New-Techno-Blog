const router = require('express').Router();

const apiRoutes = require('./api/');
const homePageRoutes = require('./homepageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homePageRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;