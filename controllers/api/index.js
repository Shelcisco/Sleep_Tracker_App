const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
// const sleepRoutes = require('./sleepRoutes.js');

router.use('/users', userRoutes);
// router.use('/sleep', sleepRoutes);

module.exports = router;