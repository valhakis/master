var passport = require('passport');
var User = Loc.require('app/models/user');
var Post = Loc.require('app/models/post');

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
  Promise.all([
    Post.find({}).limit(3).sort({createdAt: -1}).populate('author').exec(),
    User.find({}).populate('posts').exec(),
  ]).then(values => {
    res.locals.posts = values[0];
    res.locals.users = values[1];
    res.render('index');
  }).catch(errors => {
    res.send(errors);
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
    res.locals.flashMessages = req.flash('flashMessages');
    res.render('profile');
  });
};

exports.renderProfilePosts = function(req, res) {
  Post.find({author: req.user._id}, function(err, posts) {
    if (err) return res.send(err);
    res.locals.posts = posts;
    res.render('profile/posts');
  });
};

exports.renderD3Index = function(req, res) {
  res.render('d3/index');
};
