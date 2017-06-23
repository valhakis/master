var bcrypt = require('bcryptjs');

module.exports = function(sequelize) {
  var Sequelize = require('sequelize');

  var User = sequelize.define('User', {
    email:    {
      isEmail: true,
      allowNull: false,
      notEmpty: true,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    timestamps: true,
  });

  User.generateHash = function(password) {
    return bcrypt.hashSync(password, 10);
  };

  User.Instance.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
