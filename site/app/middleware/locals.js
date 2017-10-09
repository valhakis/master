var passport = Loc.require('app/passport');

module.exports = function(req, res, next) {

  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }

  res.locals.path = req.path;

  next();
};
