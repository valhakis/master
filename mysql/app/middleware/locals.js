module.exports = function(req, res, next) {
  res.locals.errors = [];
  res.locals.successes = [];

  req.flash('errors').forEach(function(error) {
    res.locals.errors.push(error);
  });

  req.flash('successes').forEach(function(success) {
    res.locals.successes.push(success);
  });

  next();
};
