var controller = require('./controller');

module.exports = function(router) {
   router.post('/lite-server/start', controller.start);
   router.post('/lite-server/stop', controller.stop);
   router.post('/lite-server/status', controller.status);
};
