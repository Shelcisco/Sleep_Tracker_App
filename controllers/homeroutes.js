const router = require('express').Router();
const withAuth = require('../helpers/sqlHelpers');


router.get('/', (req, res) => {
    res.render('homepage');
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/'); // need logged in page
      return;
    }
  
    res.render('login');
  });

  router.get('/', withAuth, async (req, res) => {
    try {

    } catch {

    }
  });

  module.exports = router;