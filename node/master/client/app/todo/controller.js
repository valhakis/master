module.exports = function controller($scope, Todo) {
   $scope.todos = [];
   $scope.todo = {};

   $scope.createTodo = function(todo) {
      Todo.create(todo).then(function(todo) {
         $scope.resetTodo();
         $scope.updateTodos();
      });
   };

   $scope.setDone = function(todo) {
      Todo.setDone(todo).then(function() {
         $scope.updateTodos();
      });
   };

   $scope.setNotDone = function(todo) {
      Todo.setNotDone(todo).then(function() {
         $scope.updateTodos();
      });
   };

   $scope.resetTodo = function() {
      $scope.todo = {
         text: ''
      };
   };

   $scope.updateTodos = function() {
      Todo.findAll().then(function(todos) {
         $scope.todos = todos;
      });
   };

   $scope.updateTodos();
};
