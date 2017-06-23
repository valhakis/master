var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/sample.db'
});

exports.Post = require('./models/post')(sequelize);

sequelize.sync();
