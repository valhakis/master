module.exports = function controller($rootScope, $scope, $http) {

   $scope.create = function() {
      function success(res) {
         // console.log(res.data);
      }
      function error(res) {
         // console.log(res.data);
      }
      $http.post('/api/histories', {
         userId: $rootScope.currentUser.id
      }).then(success, error);
   };

};
