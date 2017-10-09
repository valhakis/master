var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = Loc.require('app/models/user');
var auth = Loc.require('app/passport/config/auth');

var strategy = new GoogleStrategy({
  clientID        : auth.googleAuth.clientID,
  clientSecret    : auth.googleAuth.clientSecret,
  callbackURL     : auth.googleAuth.callbackURL,
}, function(token, refreshToken, profile, done) {
  // make the code asynchronous
  // User.findOne won't fire until we have all our data back from Google
  process.nextTick(function() {

    // try to find the user based on their google id
    User.findOne({ 'google.id' : profile.id }, function(err, user) {
      if (err)
        return done(err);

      if (user) 
        return done(null, user);

      User.findOne({email: profile.emails[0].value}, function(err, user) {
        if (err) return done(err);

        if (!user) {
          // if the user isnt in our database, create a new user
          var newUser = new User();

          // set all of the relevant information
          newUser.google.id = profile.id;
          newUser.google.token = token;
          newUser.name = profile.displayName;

          newUser.email = profile.emails[0].value;
          newUser.name = profile.displayName;

          // save the user
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        } else {
          user.google.id = profile.id;
          user.google.token = token;
          user.google.name = profile.displayName;
          user.save(function(err) {
            if (err) throw err;
            return done(null, user);
          });
        }
      });
    });
  });
});

module.exports = strategy;
