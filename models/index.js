const sequelize = require('../config/database');
const User = require('./User');  
const Tweet = require('./Tweet');


sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error al sincronizar la base de datos:', err));

module.exports = { User, Tweet };  
