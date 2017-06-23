const Sequelize = require('sequelize');

var db = new Sequelize({
  dialect: 'sqlite',
  storage: App.path('server/data/db.sqlite')
});

const User = db.define('User', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = db;
