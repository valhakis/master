export default function config($stateProvider) {
   $stateProvider
      .state('code', {
         // 'example-nav'
         url: '/code',
         template: require('./template.pug')(),
         redirectTo: 'code.index',
         controller: function($scope, $http) {
            $scope.code = {};

            $scope.codes = [];

            $scope.resetCode = function() {
               $scope.code = {
                  title: '',
                  body: ''
               };
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
         }
      })
      .state('code.index', {
         // 'example-nav'
         url: '/index',
         template: require('./index/template.pug')()
      })
      .state('code.create', {
         // 'example-nav'
         url: '/create',
         template: require('./create/template.pug')()
      });
}
