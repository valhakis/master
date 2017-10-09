var passport = require('passport');

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/site');
};

exports.demo = function(req, res) {
  req.flash('flashMessages', {
    type: 'error',
    message: 'THANK YOU FOR VISITING DEMO PAGE ASSHOLE'
  });
  req.flash('flashMessages', {
    type: 'success',
    message: 'THANK YOU FOR VISITING DEMO PAGE NICE PERSON'
  });
  res.redirect('/site');
};

exports.renderIndex = function(req, res) {
  res.render('index', {
    flashMessages: req.flash('flashMessages')
  });
};

exports.renderRegister = function(req, res) {
  res.render('register', {
    flashMessages: req.flash('flashMessages')
  });
};

exports.renderLogin = function(req, res) {
  res.render('login');
};

exports.doLogin = function(req, res) {
  res.send(req.body);
};

exports.doLogout = function(req, res) {
  req.logout();
  res.redirect('/site');
};

exports.renderProfile = function(req, res) {
  isLoggedIn(req, res, function() {
    res.render('profile', {
      flashMessages: req.flash('flashMessages'),
      user: req.user
    });
  });
};
