function TodoController(Todo, $scope, $http) {
  $scope.status;
  $scope.todos;

  $scope.title = 'DEFAULT TODO TITLE';

  Todo.findAll().then(response => {
    $scope.todos = response.data;
  });

}

export default TodoController;
