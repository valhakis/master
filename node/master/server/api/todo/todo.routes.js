var controller = require('./todo.controller');

module.exports = function(router) {
   router.get('/todos', controller.all);
   router.post('/todos', controller.create);
   router.delete('/todos/:todoId', controller.remove);
};
