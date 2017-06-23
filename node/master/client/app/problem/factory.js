module.exports = function problemFactory($http) {
   var factory = {};

   factory.handleErrors = function(res) {
      console.log(res.data);
   };

   factory.findAll = function() {
      return $http.get('/api/problems').then(function(res) {
         return res.data;
      }, factory.handleErrors);
   };

   factory.single = function(problemId) {
      return $http.get(`/api/problems/${problemId}`).then(function(res) {
         return res.data;
      }, factory.handleErrors);
   };

   factory.create = function(problem) {
      return $http.post('/api/problems', problem).then(function(res) {
         return res.data;
      }, factory.handleErrors);
   };

   factory.delete = function(problem) {
      return $http.delete(`/api/problems/${problem._id}`).then(function(res) {
         return res.data;
      }, factory.handleErrors);
   };

   factory.update = function(problem) {
      return $http.put(`/api/problems/${problem._id}`, problem).then(function(res) {
         return res.data;
      }, factory.handleErrors);
   };

   return factory;
};
