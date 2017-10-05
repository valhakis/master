module.exports = function(app, done) {

  var loc = Loc['codemirror'];

  app.use('/', loc.static('public'));

  done();
};
