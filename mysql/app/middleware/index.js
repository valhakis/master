module.exports = function(app, done) {
  app.use(require('./locals'));

  app.use('/', Loc.static('public'));

  done();
};
