const router = require("express").Router();
// const { User, Sleep } = require("../models");
// const withAuth = require("../helpers/sqlHelpers");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/sleep");
    return;
  }
  res.render("homepage");
});


router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/sleep");
    return;
  }
  res.render("login");
});

module.exports = router;
