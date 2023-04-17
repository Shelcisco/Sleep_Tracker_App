const router = require('express').Router();
const { User, Sleep } =  require('../models');
const withAuth = require('../helpers/sqlHelpers');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/sleep', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Sleep }],
    });
    
    const user = userData.get({ plain: true });
    
    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;