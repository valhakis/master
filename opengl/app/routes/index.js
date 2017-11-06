var main = Loc.require('shared/main');

module.exports = function(app) {
  app.get('/', function(req, res) {
    main.render('index', req, res);
  });
  app.use('/programs', require('./programs'));
  app.use('/blog', require('./blog'));
  app.use('/posts', require('./post'));
  app.use(require('./404'));
};
