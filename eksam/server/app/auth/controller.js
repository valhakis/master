var hbs = require('handlebars');
var fs = require('fs');

exports.renderIndex = function(req, res) {
  res.end(template('views/index.hbs', {
  }));
};

exports.renderLogin = function(req, res) {
  res.end(template('views/login.hbs', {
    message: req.flash('loginMessage')
  }));
};

exports.renderSignup = function(req, res) {
  res.end(template('views/signup.hbs', {
    message: req.flash('signupMessage')
  }));
};

exports.renderProfile = function(req, res) {
  res.end(template('views/profile.hbs', {
    user: req.user
  }));
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/auth/login');
};

exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/auth/login');
};

hbs.registerPartial('header', '<div>HEADER</div>');

function template(file, data) {
  var layout = fs.readFileSync(__dirname + '/views/layout.hbs', 'utf8');
  var template = hbs.compile(layout);

  return template(data, {
    helpers: {
      body: function(options) {
        var source = fs.readFileSync(__dirname + '/' + file, 'utf8');
        var template = hbs.compile(source);
        return template(data);
      },
    }
  });
}

exports.signup = function(req, res) {
};
