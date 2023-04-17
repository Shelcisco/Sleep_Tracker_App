const router = require('express').Router();
const { User, Sleep } =  require('../models');
const withAuth = require('../helpers/sqlHelpers');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/sleep'); 
    return;
  }
  res.render('homepage');
});

router.get('/sleep', withAuth, async (req, res) => {
  try {
      const sleepData = new Sleep ({
        inlcude: [{ model: User }],
      });

      const sleep = sleepData.get({ plain: true });
  
      res.render('sleep', {
        sleep,
        logged_in: true
      });
    } catch (err) {
      console.log(err);
      res.status().json(err);
    }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/sleep');
    return;
  }
  res.render('login');
});

module.exports = router;