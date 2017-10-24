var serveIndex = require('serve-index');

module.exports = function(app) {
  app.use(Loc.static('public'));
  app.use('/scrap', serveIndex(Loc.root('public/scrap'), {
    hidden: true,
    icons: true,
    view: 'details',
    stylesheet: App.masterRoot('lib/serve-index.css')
  }));
};
