const Sequelize = require('sequelize');

const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;