angular.module('app').controller('AboutController', function($scope, CodeService) {
   $scope.codes = [];

   $scope.removeCode = function(code) {
      CodeService.remove(code, function() {
         $scope.getCodes();
      });
   };

   $scope.getCodes = function() {
      CodeService.findAll(function(codes) {
         $scope.codes = codes;
      });
   };

   $scope.getCodes();
});
