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
    const sleepData = new Sleep({
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

router.post("/sleep", withAuth, async (req, res) => {
  try {
    const newSleepData = await Sleep.create({
      date: req.body.date,
      hours: req.body.hours,
      mood: req.body.mood,
      rem_sleep: req.body.rem_sleep,
      // user_id: req.session.id,
    });

    res.status(200).json(newSleepData);
  } catch (err) {
    res.status(400).json(err);
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
