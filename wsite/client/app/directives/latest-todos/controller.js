module.exports = function latestTodosDirectiveController($scope, $http) {
  $scope.todos = [];

  $http.get('/api/todos?limit=3').then(function success(response) {
    $scope.todos = response.data;
  });
} 
