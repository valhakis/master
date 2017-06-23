var controller = require('./controller');

module.exports = function(router) {
   router.get('/example', controller.index);
   router.get('/example/start', controller.start);
   router.get('/example/stop', controller.stop);
   router.get('/example/status', controller.status);
};
