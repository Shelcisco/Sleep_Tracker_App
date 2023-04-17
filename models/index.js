const User = require('./User');
const Sleep = require('./Sleep');

 //sleep data with each other. we need to associate every sleep data with every user. 

User.hasMany(Sleep, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Sleep };
