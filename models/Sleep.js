const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rem_sleep: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sleep',
      }
);

module.exports=Sleep;