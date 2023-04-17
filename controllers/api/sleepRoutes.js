const router = require('express').Router();
const { User, Sleep } = require('../../models');
const withAuth = require('../../helpers/sqlHelpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Sleep }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('sleep', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const newSleepData = await Sleep.create({
        id: req.body.day,
        hours: req.body.hours,
        mood: req.body.mood,
        rem_sleep: req.body.rem_sleep,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newSleepData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;