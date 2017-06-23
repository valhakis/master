export default function TodoService (api, $http) {
   var service = {};

   service.example = function() {
      function createTodo(todo, callback) {
         $http
            .post(`${api}/todos.json`, todo)
            .then(function(res) {
               callback(res.data);
            });
      }

      function getTodos(callback) {
         $http
            .get(`${api}/todos.json`)
            .then(function(res) {
               callback(res.data);
            });
      }

      getTodos(function(todos) {
         for (var id in todos) {
            if (!todos.hasOwnProperty(id)) continue;
            todos[id].todoId = id;
            console.log('id:', id, ' () ->', todos[id]);
         }
      });
      /*
      createTodo({
         name: 'example one todo',
         content: 'example one content'
      }, function() {
      });
      */
   };

   service.all = function(callback) {
      $http.get(`${api}/api/todos.json`).then(function(res) {
         if (res.data === null) {
            callback({});
         } else {
            callback(res.data);
         }
      });
   };

   service.create = function(todo, callback) {
      $http.post(`${api}/api/todos.json`, todo).then(function(res) {
         callback(res.data);
      });
   };

   service.remove = function(key, callback) {
      $http.delete(`${api}/api/todos/${key}.json`).then(function() {
         callback();
      });
   };

   return service;
}
