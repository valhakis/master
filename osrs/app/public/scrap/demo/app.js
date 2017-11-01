var app = angular.module('app', []);

app.controller('ItemController', function ($scope, $http) {
  $scope.item = {};
  $scope.submit = function(item) {
    $http.post(`/osrs/api/items/`, item).then(function(res) {
      console.log(res.data);
    });;
  };
});
