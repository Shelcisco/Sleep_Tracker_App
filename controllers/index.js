const router = require('express').Router();

const homeroutes = require('./homeroutes.js')
const apiRoutes = require('./api');

router.use('/', homeroutes);
router.use('/api', apiRoutes);

module.exports = router;
