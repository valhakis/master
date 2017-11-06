function TodoListDirective() {
  return {
    template: require('./todo-list.template.html'),
    controller: function(Todo, $scope) {
      Todo.findAll().then(response => {
        $scope.todos = response.data;
      });
    },
  };
}

export default TodoListDirective; 
