(function() {
  var nsite_app = angular.module('nsite_app', []);

  nsite_app.config(function nsite_app_configuration($interpolateProvider) {
    $interpolateProvider.startSymbol('<%').endSymbol('%>');
  });

  nsite_app.run(function nsite_app_run($rootScope, $http) {
    $rootScope.host = 'xxx.xxx.x.x';
    $rootScope.port = 'xxxx';
    $rootScope.bs_port = 'xxxx';
    $http.get(`/api/common/nsite_env_return`).then(function success(res) {
      var env = res.data;
      $rootScope.host = env.host;
      $rootScope.port = env.port;
      $rootScope.bs_port = env.bs_port;
    });
  });

})();
