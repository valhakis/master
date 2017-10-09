var passport = Loc.require('app/passport');

var LocalStrategy   = require('passport-local').Strategy;
var User            = Loc.require('app/models/user');

module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', require('./localSignup'));
  passport.use('local-login', require('./localLogin'));

  passport.use(require('./facebook'));
  passport.use(require('./google'));

  passport.use(require('./github'));
  // passport.use(require('./google-v2'));
};
