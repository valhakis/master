var ctrl = require('./controller');

module.exports = function(app) {
  app.get('/api/nodes', ctrl.findAll);
  app.post('/api/nodes', ctrl.create);
};
