var MainController = Loc.require('app/controllers/main');

module.exports = function(app) {
  app.get('/', MainController.renderIndex);

  app.use('/angular', require('./angular'));
  app.use('/handsontable', require('./handsontable'));
};
