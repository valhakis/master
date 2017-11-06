var todo_module = angular.module('app.todo', []);

todo_module.config(require('./todo.config'));
todo_module.config(require('./todo.routes'));

module.exports = todo_module.name;
