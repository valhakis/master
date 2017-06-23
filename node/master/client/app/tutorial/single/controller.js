module.exports = function controller($scope, tutorial) {
   $scope.code = {};
   $scope.resetCode = function() {
      $scope.code = {
         language: 'javascript',
         body: ''
      };
   };
   $scope.tutorial = tutorial;
   $scope.resetCode();
};
