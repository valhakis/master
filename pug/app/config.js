module.exports = function(app) {
  app.set('views', Loc.root('views'));
  app.set('view engine', 'pug');
  app.set('view options', {
    layout: false
  });
  app.locals.basedir = Loc.root('views');
};
