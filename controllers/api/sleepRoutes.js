const router = require("express").Router();
const { User, Sleep } = require("../../models");
const withAuth = require("../../helpers/sqlHelpers");

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

router.get("/", async (req, res) => {
    try {
      const sleepData =  Sleep.findAll({
        inlcude: [{ model: User, attributes: ["id", "first_name"] }],
      });
  
      const sleep = sleepData.get({ plain: true });
  
      res.render("sleep", {
        sleep,
        logged_in: true,
      });
    } catch (err) {
      console.log(err);
      res.status().json(err);
    }
  });

module.exports = router;
