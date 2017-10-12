module.exports = function(api) {
  var Todo = App.require('server/api/todo.controller');

  api.get('/todos', Todo.all);
  //api.post('/todos', Todo.create);
  //api.get('/todos/:todoId', Todo.read);
  //api.put('/todos/:todoId', Todo.update);
  //api.delete('/todos/:todoId', Todo.delete);
};
