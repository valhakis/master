var controller = require('./todo.controller');

module.exports = function(router) {
   router.get('/todos', controller.all);
   router.post('/todos', controller.create);
   router.delete('/todos/:todoId', controller.remove);
   router.delete('/todos/:todoId/permanently', controller.removePermanently);
   router.put('/todos/:todoId/finished', controller.finished);
   router.put('/todos/:todoId/done', controller.setDone);
   router.put('/todos/:todoId/notDone', controller.setNotDone);
};
