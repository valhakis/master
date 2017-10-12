var app = angular.module('app', []);

app.directive('todo', function() {
  return {
    template: `<p>todo</p>`
  };
});

app.factory('Todo', function($http) {
  var fa = {};

  $http.get('/api/todos', function() {

  });

  fa.all = function(cb) {
    cb([]);
  };

  return fa;
});

app.controller('TodoController', function TodoController($http, Todo) {
  var vm = {}

  Todo.all(function(todos) {
    console.log(todos);
  });

  return vm;
});
