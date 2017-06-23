var ctrl = require('./controller');

module.exports = function(app, passport) {
  require('./config')(app, passport);

  app.get('/auth', ctrl.renderIndex);
  app.get('/auth/login', ctrl.renderLogin);
  app.get('/auth/signup', ctrl.renderSignup);
  app.get('/auth/profile', ctrl.isLoggedIn, ctrl.renderProfile);
  app.get('/auth/logout', ctrl.logout);
  app.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect: '/auth/profile',
    failureRedirect: '/auth/signup',
    failureFlash: true
  }));
  app.post('/auth/login', passport.authenticate('local-login', {
    successRedirect: '/auth/profile',
    failureRedirect: '/auth/login',
    failureFlash: true
  }));
};
