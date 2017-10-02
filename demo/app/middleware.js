module.exports = function(app, done) {

  var loc = Loc['demo'];

  app.use('/', loc.static('public'));

  done();
};
