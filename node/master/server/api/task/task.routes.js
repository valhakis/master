var controller = require('./task.controller');

module.exports = function(router) {
   router.get('/tasks', controller.all);
   router.post('/tasks', controller.create);
   router.delete('/tasks/:taskId', controller.remove);
};
