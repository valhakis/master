module.exports = function controller(Todo) {
   var vm = {};

   vm.todos = [];

   vm.updateTodos = function() {
      Todo.findRemoved().then(function(todos) {
         vm.todos = todos;
      });
   };

   vm.recoverTodo = function(todo) {
      Todo.recover(todo).then(function() {
         vm.updateTodos();
      });
   };

   vm.removePermanently = function(todo) {
      Todo.destroy(todo).then(function() {
         vm.updateTodos();
      });
   };

   vm.updateTodos();
   return vm;
};
