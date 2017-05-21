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
      setDone: function(todo) {
         return $http.put(`/api/todos/${todo._id}/done`).then(function(res) {
            return res.data;
         });
      },
      setNotDone: function(todo) {
         return $http.put(`/api/todos/${todo._id}/notDone`).then(function(res) {
            return res.data;
         });
      }
   };
   return service;
};
