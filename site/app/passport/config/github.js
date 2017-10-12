var GitHubStrategy = require('passport-github').Strategy;

var User = Loc.require('app/models/user');
var auth = Loc.require('app/passport/config/auth');

module.exports = new GitHubStrategy({
  clientID        : auth.github.clientID,
  clientSecret    : auth.github.clientSecret,
  callbackURL     : auth.github.callbackURL,
  scope: 'user:email',
}, function(token, refreshToken, profile, done) {
  process.nextTick(function() {
    User.findOne({ 'github.id' : profile.id }, function(err, user) {
      if (err)
        return done(err);
      if (user)
        return done(null, user);

      User.findOne({email: profile.emails[0].value}, function(err, user) {
        if (err) return done(err);
        if (!user) {
          var newUser = new User();
          // set all of the relevant information
          newUser.github.id    = profile.id;
          newUser.github.token = token;
          newUser.github.name  = profile.username;
          newUser.email = profile.emails[0].value;

          // save the user
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        } else {
          user.github.id = profile.id;
          user.github.token = token;
          user.github.name = profile.username;
          user.save(function(err) {
            if (err) return done(err);
            return done(null, user);
          });
        }
      });

    });
  });
});
