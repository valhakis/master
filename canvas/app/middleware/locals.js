var moment = require('moment');

module.exports = function(req, res, next) {
  if (!res.locals.successes) {
    res.locals.successes = [];
  }

  if (!res.locals.errors) {
    res.locals.errors = [];
  }

  var errors = req.flash('errors');
  errors.forEach(function(error) {
    res.locals.errors.push(error);
  });

  errors = req.flash('error');
  errors.forEach(function(error) {
    res.locals.errors.push(error);
  });

  var successes = req.flash('success');
  successes.forEach(function(success) {
    res.locals.successes.push(success);
  });

  successes = req.flash('successes');
  successes.forEach(function(success) {
    res.locals.successes.push(success);
  });

  // AGO MIDDLEWARE
  res.locals.ago = function(input) {
    var createdAt = new Date(input);
    console.log(createdAt.getHours(), createdAt.getMinutes(), createdAt.getSeconds());
  };

  next();
};
