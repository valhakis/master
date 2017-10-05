module.exports = function(app, done) {

  var loc = Loc['todo'];

  app.use(require('./locals'));

  app.use('/', loc.static('public'));

  done();
};
