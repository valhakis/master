module.exports = function(app, done) {

  var loc = Loc['stack'];

  app.use(require('./locals'));

  app.use('/', loc.static('public'));

  done();
};
