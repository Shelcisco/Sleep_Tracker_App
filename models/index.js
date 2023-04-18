const User = require('./User');
const Sleep = require('./Sleep');

 //sleep data with each other. we need to associate every sleep data with every user. 

User.hasMany(Sleep, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
  foreignKey: 'users_id'
});

module.exports = { User, Sleep };
