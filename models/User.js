const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id:{
            primaryKey:true,
            type:DataTypes.STRING,
            allowNull:false,    
            autoIncrement:true 
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
            validate:{
                isEmail:true
            }
        },
        user_password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
      }
);


module.exports = User;