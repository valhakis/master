/* global angular */

var app = angular.module('starter.airports', []);
app.controller('bgwCtrl', function($scope, $http) {
  $http.get("/airport.json")
    .then(function(response) {
      $scope.Sched = response.data;
      console.log($scope.Sched);
    });
});
