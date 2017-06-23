module.exports = function(app, passport) {
  var LocalStrategy = require('passport-local').Strategy;
  var User = App.rootRequire('server/db').User;

  // User.sync({ force: true })
  // password: User.generateHash('example');
  // user.validPassword('example')

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(user => {
      done(null, user);
    }).catch(err => {
      done(err, null);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {
    process.nextTick(function() {
      User.findOne({where: {
        email: email 
      }}).then(user => {
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already in use.'));
        } else {
          User.create({
            email: email,
            password: User.generateHash(password)
          }).then(user => {
            return done(null, user);
          }).catch(err => {
            return done(err);
          });
        }
        console.log('USER:', JSON.stringify(user, ' ', 2));
      }).catch(err => {
        return done(err);
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {
    User.findOne({where: {
      email: email
    }}).then(user => {
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'AHAaha. Wrong password.'));
      }
      return done(null, user);
    }).catch(err => {
      if (err) return done(err);
    });
  }));

};
