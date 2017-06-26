var Sequelize = require('sequelize');
var db = new Sequelize({dialect: 'sqlite', storage: __dirname + '/db1.sqlite'});

module.exports = db;
