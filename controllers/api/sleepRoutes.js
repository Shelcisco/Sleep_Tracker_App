const router = require("express").Router();
const { User, Sleep } = require("../../models");
const withAuth = require("../../helpers/sqlHelpers");

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//           attributes: { exclude: ['password'] },
//           include: [{ model: Sleep }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('sleep', {
//           ...user,
//           logged_in: true
//         });
//       } catch (err) {
//         res.status(500).json(err);
//       }
// });

module.exports = router;
