var passport = Loc.require('app/passport');

exports.facebookCallback = function(req, res, next) {
  return passport.authenticate('facebook', {
    successRedirect: '/site/profile',
    failureRedirect: '/site'
  })(req, res, next);
};

exports.facebook = function(req, res, next) {
  return passport.authenticate('facebook', {
    scope: 'email'
  })(req, res, next);
};


exports.google = function(req, res, next) {
  return passport.authenticate('google', {
    scope : [ 'profile', 'email' ]
  })(req, res, next);
};

exports.googleCallback = function(req, res, next) {
  return passport.authenticate('google', {
    successRedirect: '/site/profile',
    failureRedirect: '/site'
  })(req, res, next);
};


exports.github = function(req, res, next) {
  return passport.authenticate('github', {
    scope: 'user:email',
  })(req, res, next);
};

exports.githubCallback = function(req, res, next) {
  return passport.authenticate('github', {
    successRedirect: '/site/profile',
    failureRedirect: '/site',
    scope: 'user:email',
  })(req, res, next);
};
