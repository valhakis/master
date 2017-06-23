module.exports = function controller($scope, Todo) {
   $scope.one = function() {
      console.log('one');
   };
   $scope.two = function() {
      console.log('two');
   };

   $scope.state = 'create';

   $scope.key = null;
   $scope.keys = [];
   $scope.todo = {};
   $scope.todos = {};

   // Todo.example();

   $scope.resetTodo = function() {
      $scope.todo = {
         content: '',
         createdAt: null
      };
   };
   
   $scope.editTodo = function(key) {
      $scope.state = 'edit';
      $scope.todo = $scope.todos[key];
      // $scope.key = key;
      // $scope.todo = $scope.todos[$scope.key];
      // Todo.edit(key, todo, function() {

      // });
   };

   $scope.updateTodos = function() {
      Todo.all(function(todos) {
         $scope.keys = Object.keys(todos);
         $scope.todos = todos;
      });
   };

   $scope.createTodo = function(todo) {
      todo.createdAt = Date.now();

      Todo.create(todo, function(todo) {
         $scope.updateTodos();
         $scope.resetTodo();
      });
   };

   $scope.removeTodo = function(key) {
      Todo.remove(key, function() {
         $scope.updateTodos();
      });
   };

   (function() {
      $scope.updateTodos();
      $scope.resetTodo();
   })();
};
