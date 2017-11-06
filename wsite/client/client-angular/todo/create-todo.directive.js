function CreateTodoDirective() {
  return {
    template: require('./create-todo.template.html'),
    controller: function(Todo, $scope, $http) {
      $scope.todo = {};
      $scope.submit = function(todo) {
        Todo.create({
          title: todo.title
        }).then(() => {
        });
        /*
        $http.post('/api/todos', {
          title: todo.title
        }).then(response => {
          console.log(response.data);
        });
        */
      };
      $scope.resetTodo = function() {
        $scope.todo = {};
      };
    }
  };
}

export default CreateTodoDirective;
