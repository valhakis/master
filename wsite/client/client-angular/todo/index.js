var mod = angular.module('todo', []);

import TodoController from './controller';
import TodoService from './todo.service';
import CreateTodoDirective from './create-todo.directive';
import TodoListDirective from './todo-list.directive';

mod.controller('TodoController', TodoController);
mod.directive('createTodo', CreateTodoDirective);
mod.directive('todoList', TodoListDirective);
mod.factory('Todo', TodoService);

export default mod.name;
