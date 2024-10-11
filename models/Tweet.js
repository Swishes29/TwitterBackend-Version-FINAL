const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Tweet extends Model {}

Tweet.init({
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  handle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE, 
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Tweet',
  tableName: 'tweets',
  timestamps: true, 
});

module.exports = Tweet;
