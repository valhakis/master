module.exports = function(req, res, next) {

  res.locals.errors = req.flash('errors') || [];
  res.locals.successes = req.flash('successes') || [];

  next();
};
