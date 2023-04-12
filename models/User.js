const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id:{
            type:DataTypes.STRING,
            allowNull:false,     
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email_address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }
);


module.exports = User;