module.exports = function CodeService($http) {
   var service = {};

   service.codes = [];

   service.create = function(code, callback) {
      $http.post('/api/codes', code).then(function(res) {
         if (callback) callback(res.data);
         service.all();
      });
   };

   service.all = function(callback) {
      $http.get('/api/codes').then(function(res) {
         service.codes = res.data;
         if (callback) callback(res.data);
      });
   };

   service.findById = function(codeId) {
      return $http.get(`/api/codes/${codeId}`).then(function(res) {
         return res.data;
      });
   };

   service.update = function(code) {
      return $http.put(`/api/codes/${code._id}`, code).then(function(res) {
         return res.data;
      });
   };

   return service;
};
