module.exports = function config($stateProvider) {
  $stateProvider
    .state('directive', {
      url: '/directive',
      template: require('./template.html'),
      controller: require('./controller'),
      controllerAs: 'main'
    });
};
