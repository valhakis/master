var config = App.rootRequire('projects/config');

var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.root + '/data/database.sqlite'
});
