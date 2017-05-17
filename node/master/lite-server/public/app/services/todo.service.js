angular.module('app').factory('TodoService', function ($http, DATA) {
   var url = DATA.server.url;
   var service = {};

   service.findAll = function(callback) {
      $http.get(`${url}/api/todos`).then(function(res) {
         callback(res.data);
      });
   };

   service.create = function(todo, callback) {
      $http.post(`${url}/api/todos`, todo).then(function(res) {
         callback(res.data);
      });
   };

   service.remove = function(todo, callback) {
      $http.delete(`${url}/api/todos/${todo._id}`).then(function(res) {
         callback(res.data);
      });
   };

   service.finished = function(todo, callback) {
      $http.put(`${url}/api/todos/${todo._id}/finished`).then(function(res) {
         callback(res.data);
      });
   };

   service.removePermanently = function(todo, callback) {
      $http.delete(`${url}/api/todos/${todo._id}/permanently`).then(function(res) {
         callback(res.data);
      });
   };

   return service;
});
