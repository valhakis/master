module.exports = function controller($scope, $http, Code, $state) {
   $scope.code = {};

   $scope.codes = [];

   $scope.resetCode = function() {
      $scope.code = {
         title: '',
         body: ''
      };
   };

   $scope.setTemplateCode = function(code) {
      $scope.code = code;
      $state.go('code.create');
   };

   $scope.createCode = function(code) {
      $http.post('/api/codes', code).then(function(res) {
         $scope.updateCodes();
         $scope.resetCode();
      });
   };

   $scope.updateCodes = function() {
      $http.get('/api/codes').then(function(res) {
         $scope.codes = res.data;
      });
   };

   $scope.removeCode = function(code) {
      $http.delete(`/api/codes/${code._id}`).then(function() {
         $scope.updateCodes();
      });
   };

   $scope.updateHighlighting = function() {
      $('pre code').each(function(i, block) {
         hljs.highlightBlock(block);
      });
   };

   (function() {
      $scope.updateCodes();
   })();
};
