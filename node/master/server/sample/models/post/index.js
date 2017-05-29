module.exports = function(sequelize) {
  var Sequelize = require('sequelize');
  return sequelize.define('post', {
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
  });
};
