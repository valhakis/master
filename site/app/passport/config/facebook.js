var FacebookStrategy = require('passport-facebook').Strategy;
var User = Loc.require('app/models/user');
var auth = Loc.require('app/passport/config/auth');

module.exports = new FacebookStrategy({
  clientID        : auth.facebookAuth.clientID,
  clientSecret    : auth.facebookAuth.clientSecret,
  callbackURL     : auth.facebookAuth.callbackURL,
  profileFields: ['id', 'displayName', 'email']
}, function(token, refreshToken, profile, done) {
  // asynchronous
  process.nextTick(function() {

    // find the user in the database based on their facebook id
    User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

      // if there is an error, stop everything and return that
      // ie an error connecting to the database
      if (err)
        return done(err);

      // if the user is found, then log them in
      if (user) {
        return done(null, user); // user found, return that user
      }
      // if there is no user found with that facebook id, create them
      User.findOne({email: profile.emails[0].value}, function(err, user) {
        if (err) return done(err);
        if (!user) {
          var newUser = new User();

          // set all of the facebook information in our user model
          newUser.facebook.id    = profile.id; // set the users facebook id                   
          newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
          newUser.facebook.name = profile.displayName;

          newUser.email = profile.emails[0].value;
          newUser.name = profile.displayName;

          // save our user to the database
          newUser.save(function(err) {
            if (err)
              console.log(err);

            // if successful, return the new user
            return done(null, newUser);
          });
        } else {
          user.facebook.id = profile.id;
          user.facebook.token = token;
          user.facebook.name = profile.displayName;
          user.save(function(err) {
            if (err) return done(err);
            done(null, user);
          });
        }
      });
    });
  });
});
