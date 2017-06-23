module.exports = function controller($scope, Code) {
   $scope.createCode = function(code) {
      Code.create(code, function(code) {
         $scope.updateCodes();
         $scope.resetCode();
      });
   };
   $scope.updateCodes();
};
