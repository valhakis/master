var controller = require('./home.controller');

module.exports = function home(app) {
  app.get('/', controller.index);
  app.use('/home', require('./home.routes'));
};
