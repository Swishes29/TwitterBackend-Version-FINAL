const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Tweet = sequelize.define('Tweet', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

Tweet.belongsTo(User, { foreignKey: 'userId' });

module.exports = Tweet;
