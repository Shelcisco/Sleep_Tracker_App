const sequelize = require('../config/connection');
const {Sleep, User } = require('../models');

const sleepData = require('./sleep.json');
const userData = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
  const sleeps = await Sleep.bulkCreate(sleepData);

  process.exit(0);
};

seedDatabase();
