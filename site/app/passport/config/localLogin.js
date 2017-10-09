var User            = Loc.require('app/models/user');
var LocalStrategy   = require('passport-local').Strategy;

module.exports = new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true,
}, function(req, email, password, done) {
  User.findOne({email: email}, function(err, user) {
    // if there are any errors, return the error before anything else
    if (err)
      return done(err);

    // if no user is found, return the message
    if (!user)
      return done(null, false, req.flash('flashMessages', {type: 'error', message: 'No user found.'})); // req.flash is the way to set flashdata using connect-flash

    // if the user is found but the password is wrong
    if (!user.validPassword(password))
      return done(null, false, req.flash('flashMessages', {type: 'error', message: 'Oops! Wrong password.'})); // create the loginMessage and save it to session as flashdata

    // all is well, return successful user
    return done(null, user);
  });
});
