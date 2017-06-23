var Sequelize = require('sequelize');

var db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/database.sqlite'
});

module.exports = {
  db: db,
  Movie: require('./models/Movie')(db)
};
