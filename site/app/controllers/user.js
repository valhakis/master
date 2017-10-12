var User = Loc.require('app/models/user');
var passport = Loc.require('app/passport');

exports.renderIndex = function(req, res) {
  res.render('users/index');
};

exports.renderLogin = function(req, res) {
  res.render('users/login');
};

exports.renderRegister = function(req, res) {
  res.render('users/register');
};

exports.doLogin = function(req, res, next) {
  return passport.authenticate('local-login', {
    successRedirect: '/site/profile',
    failureRedirect: '/site/users/login',
    failureFlash: true
  })(req, res, next);
};

exports.doRegister = function(req, res, next) {
  return passport.authenticate('local-signup', {
    successRedirect: '/site/profile',
    failureRedirect: '/site/users/register',
    failureFlash: true
  })(req, res, next);
};

exports.setPassword = function(req, res) {
  User.findOne({_id: req.user._id}, function(err, user) {
    if (err) return res.send(err);
    user.password = user.generateHash(req.body.password);
    user.save(function(err) {
      if (err) return res.send(err);
      res.redirect('/site/profile');
    });
  });
};
