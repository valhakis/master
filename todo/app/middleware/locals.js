module.exports = function(req, res, next) {
  if (!res.locals.errors) {
    res.locals.errors = [];
  }

  if (!res.locals.successes) {
    res.locals.successes = [];
  }

  res.locals.error = req.flash('error') || '';
  res.locals.success = req.flash('success') || '';

  var errors = req.flash('errors') || [];
  var successes = req.flash('successes') || [];

  errors.forEach(function(error) {
    res.locals.errors.push(error);
  });

  successes.forEach(function(success) {
    res.locals.successes.push(success);
  });

  next();
};
