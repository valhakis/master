var MainController = Loc.require('controllers/main');

module.exports = function(app) {
  app.get('/', MainController.index);

  app.use('/api', Loc.require('api'));

  app.use('/todos', require('./todo'));

  app.use('*', MainController.M404);
};
