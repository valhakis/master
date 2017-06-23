module.exports = function DocumentService($http) {
   var service = {};

   service.all = function(callback) {
      $http.get('/api/documents').then(function(res) {
         callback(res.data);
      });
   };

   service.remove = function(document, callback) {
      $http.delete(`/api/documents/${document._id}`).then(function(res) {
         if (callback) {
            callback(res.data);
         }
      });
   };

   service.unRemove = function(document, callback) {
      $http.put(`/api/documents/${document._id}/unremove`).then(function(res) {
         if (callback) {
            callback(res.data);
         }
      });
   };

   return service;
};
