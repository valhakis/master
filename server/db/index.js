/*
const Sequelize = require('sequelize');

var db = new Sequelize({
  dialect: 'sqlite',
  storage: App.path('server/data/db.sqlite'),
  logging: false
});

const User = db.define('User', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = db;
*/

var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/main', {
  useMongoClient: true
});

db.catch(err => {
  console.log('ERROR:', JSON.stringify(err, ' ', 2));
});

module.exports = db;
