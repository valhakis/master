var MainController = Loc.require('app/controllers/main');

module.exports = function(app) {
  app.get('/', MainController.index);
};
