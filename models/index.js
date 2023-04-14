const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Sleep = require('./Sleep');

 //sleep data with each other. we need to associate every sleep data with every user. 

 User.associate = function(models){
    Sleep.belongsTo(models.User,{
      foreignKey:'id'
    })
  }
  module.exports={
    User,Sleep
  };