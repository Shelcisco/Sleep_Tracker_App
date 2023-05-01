const router = require("express").Router();
const { User, Sleep } = require("../models");
const withAuth = require("../helpers/sqlHelpers");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/sleep");
    return;
  }
  res.render("homepage");
});

router.get("/sleep", withAuth, async (req, res) => {
  try {
    const sleepData = await Sleep.findAll({
      inlcude: [{ model: User}],
      where:{
        user_id:req.session.user_id
      }
    });
    const userData = await User.findByPk(req.session.user_id);
    if(!userData){
      res.status(404).json({message:"No user"});
      return;
    }

    console.log(userData);
    const sleep = sleepData.map((sleep)=> sleep.get({plain:true}))
    //const sleep = sleepData.get({ plain: true });

    res.render("sleep", {
      userData,
      sleep,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sleep/:id", withAuth, async (req, res) => {
  try {
    const sleepData = await Sleep.findByPk(req.params.id
      )
    if(!sleepData){
      res.status(404).json({message:"No data for that day!"});
      return;
    }
    const userData = await User.findByPk(req.session.user_id);
    if(!userData){
      res.status(404).json({message:"No user"});
      return;
    }
    console.log(sleepData)
    //const sleep = sleepData.map((sleep)=> sleep.get({plain:true}))
    //const sleep = sleepData.get({ plain: true });

    res.render("singleSleep", {
      sleep:sleepData.dataValues,
      user:userData.dataValues,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/sleep");
    return;
  }
  res.render("login");
});

module.exports = router;
