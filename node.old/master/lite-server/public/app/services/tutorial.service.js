angular.module('app').factory('TutorialService', function($http, DATA) {
   var url = DATA.server.url;
   var service = {};

   service.create = function(tutorial, callback) {
      $http.post(`${url}/api/tutorials`, tutorial).then(function(res) {
         callback(res.data);
      });
   };

   service.findAll = function(callback) {
      $http.get(`${url}/api/tutorials`).then(function(res) {
         callback(res.data);
      });
   };

   service.remove = function(tutorial, callback) {
      $http.delete(`${url}/api/tutorials/${tutorial._id}`).then(function(res) {
         callback();
      });
   };

   return service;
});
