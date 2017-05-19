module.exports = function($scope, $http) {
   $scope.histories = [];
   $scope.findHistories = function() {
      function success(res) {
         $scope.histories = res.data;
      }
      $http.get('/api/histories').then(success);
   };
   (function() {
      $scope.findHistories();
   })();
};
