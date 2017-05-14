angular.module('app').factory('CodeService', function($http, DATA) {
   var url = DATA.server.url;

   var service = {};

   service.create = function(code, callback) {
      console.log('CODE SERVICE CREATE EXECUTED', code);
      $http.post(url + '/api/codes', code)
         .then(function(res) {
            console.log(res.data);
            callback();
         }, function(res) {
            console.log(res.data);
         });
   };

   service.latest = function(callback) {
      $http.get(url + '/api/codes/latest').then(function(res) {
            callback(res.data);
         });
   };

   service.findAll = function(callback) {
      $http.get(url + '/api/codes').then(function(res) {
         callback(res.data);
      });
   };

   service.remove = function(code, callback) {
      $http.delete(url + '/api/codes/' + code._id).then(function(res) {
         console.log(res.data);
         callback();
      });
   };

   return service;
});
