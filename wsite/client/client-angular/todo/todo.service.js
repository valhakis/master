export default function TodoService($http) {
  var Todo = {};

  Todo.todos = [];

  Todo.findAll = function() {
    return $http.get('/api/todos');
  };

  Todo.findById = function(id) {
    return $http.get('/api/todos/' + id);
  };

  Todo.insert = function(todo) {
    return $http.post('/api/todos', todo);
  };

  Todo.update = function(todo) {
    $http.put('/api/todos/', todo._id, todo);
  };

  Todo.delete = function(id) {
    return $http.delete('/api/todos/' + id);
  };

  Todo.update = function() {
    $http.get('/api/todos').then(response => {
      Todo.todos = response.data;
    });
  };

  Todo.create = function(todo) {
    return new Promise(function(resolve, reject) {
      $http.post('/api/todos', todo).then(response => {
        Todo.update();
        resolve(response.data);
      });
    });
  };

  return Todo;
}
