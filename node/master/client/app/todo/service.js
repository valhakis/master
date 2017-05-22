module.exports = function service($http) {
   var service =  {
      create: function(todo) {
         return $http.post('/api/todos', todo).then(function(res) {
            return res.data;
         });
      },
      findAll: function() {
         return $http.get('/api/todos').then(function(res) {
            return res.data;
         });
      },
      findRemoved: function() {
         return $http.get('/api/todos?removed=true').then(function(res) {
            return res.data;
         });
      },
      setDone: function(todo) {
         return $http.put(`/api/todos/${todo._id}/done`).then(function(res) {
            return res.data;
         });
      },
      setNotDone: function(todo) {
         return $http.put(`/api/todos/${todo._id}/notDone`).then(function(res) {
            return res.data;
         });
      },
      remove: function(todo) {
         return $http.delete(`/api/todos/${todo._id}`).then(function(res) {
            return res.data;
         });
      },
      destroy: function(todo) {
         return $http.delete(`/api/todos/${todo._id}?destroy=true`).then(function(res) {
            return res.data;
         });
      },
      recover: function(todo) {
         return $http.put(`/api/todos/${todo._id}/recover`).then(function(res) {
            return res.data;
         });
      },
      findById: function(todoId) {
         return $http.get(`/api/todos/${todoId}`).then(function(res) {
            return res.data;
         });
      }
   };
   return service;
};
