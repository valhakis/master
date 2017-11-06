module.exports = function todo_home_controller($scope, $http) {
  $scope.todos = [];

  $http.get('/api/todos').then(function success(res) {
    $scope.todos = res.data;
  });
}
