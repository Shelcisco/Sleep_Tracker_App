const router = require('express').Router();
const { User, Sleep } =  require('../models');
const withAuth = require('../helpers/sqlHelpers');

router.get('/', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/sleep'); 
    return;
  }

  res.render('login');
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



module.exports = router;