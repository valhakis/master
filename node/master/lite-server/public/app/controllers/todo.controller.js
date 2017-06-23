angular.module('app').controller('TodoController', function($scope, TodoService) {
   $scope.todos = [];
   $scope.todo = {};

   $scope.resetTodo = function() {
      $scope.todo = {
         text: ''
      };
   };

   $scope.getTodos = function() {
      TodoService.findAll(function(todos) {
         $scope.todos = todos;
      });
   };

   $scope.create = function(todo) {
      TodoService.create(todo, function() {
         $scope.resetTodo();
         $scope.getTodos();
      });
   };

   $scope.remove = function(todo) {
      TodoService.remove(todo, function() {
         $scope.getTodos();
      });
   };

   $scope.finished = function(todo) {
      TodoService.finished(todo, function() {
         $scope.getTodos();
      });
   };

   $scope.removePermanently = function(todo) {
      TodoService.removePermanently(todo, function() {
         $scope.getTodos();
      });
   };

   (function() {
      $scope.resetTodo();
      $scope.getTodos();
   })();
});
