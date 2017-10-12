module.exports = function(app, done) {

  var loc = Loc['angular'];

  app.use('/', loc.static('public'));

  done();
};
