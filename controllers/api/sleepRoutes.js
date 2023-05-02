const router = require("express").Router();
const { User, Sleep } = require("../../models");
const withAuth = require("../../helpers/sqlHelpers");

router.get("/:id", async (req, res) => {
    try {
        const newSleepData = await Sleep.findByPk(req.params.id, {
            include: [{ model: User }],
        });
        if (!newSleepData) {
            res.status(404).json({ message: "No sleep data with that ID" });
            return;
        }
        res.status(200).json(newSleepData);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.get("/", async (req, res) => {
    try {
        const newSleepData = await Sleep.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(newSleepData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const dateData = req.body.date;
        const hoursData = req.body.hours;
        const moodData = req.body.mood;
        const rem_sleepData = req.body.rem_sleep;

        const newSleepData = await Sleep.create({
            date: dateData,
            hours: hoursData,
            mood: moodData,
            rem_sleep: rem_sleepData,
            user_id: req.session.user_id,
        });

        res.status(200).json(newSleepData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const newSleepData = await Sleep.findByPk(req.params.id);
        if (!newSleepData) {
            res.status(404).json({ message: "No sleep data with that ID" });
            return;
        }
        newSleepData.destroy();
        res.status(200).json(newSleepData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
