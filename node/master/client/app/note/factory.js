module.exports = function NoteFactory($http) {
   var factory = {};

   factory.findAll = function() {
      return $http.get('/api/notes').then(function(res) {
         return res.data;
      });
   };

   factory.create = function(note) {
      return $http.post('/api/notes', note).then(function(res) {
         return res.data;
      });
   };

   factory.remove = function(note) {
      return $http.delete(`/api/notes/${note._id}`).then(function(res) {
         return res.data;
      });
   };

   factory.findRemoved = function() {
      return $http.get('/api/notes?removed=true').then(function(res) {
         return res.data;
      });
   };

   factory.destroy = function(note) {
      return $http.delete(`/api/notes/${note._id}?destroy=true`).then(function(res) {
         return res.data;
      });
   };

   return factory;
};
