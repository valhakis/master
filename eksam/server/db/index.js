var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: App.root('data/database.sqlite')
});

module.exports = {
  sequelize: sequelize,
  User: require('./models/user')(sequelize)
};
