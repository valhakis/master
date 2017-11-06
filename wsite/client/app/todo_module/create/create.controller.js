module.exports = function todo_create_controller($http, $scope) {
  $scope.todo = {};

  $scope.submit = function(todo) {
    $http.post('/api/todos', {
      title: todo.title
    }).then(function success(res) {
      console.log(res.data);
    });
    $scope.resetTodo();
  };

  $scope.resetTodo = function() {
    $scope.todo = {};
  };
}
