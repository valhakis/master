var controller = require('./controller');

module.exports = function(router) {
   router.post('/projects/01/start', controller.project01.start);
   router.post('/projects/01/stop', controller.project01.stop);
   router.post('/projects/01/status', controller.project01.status);
};
