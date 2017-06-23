module.exports = function config($stateProvider) {
  $stateProvider
    .state('node', {
      url: '/node',
      template: require('./template.html'),
      controller: require('./controller'),
      controllerAs: 'node'
    });
};
