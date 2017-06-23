module.exports = function(db) {
  var Sequelize = require('sequelize');
  return db.define('Movie', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });
};
