module.exports = function config($stateProvider) {
  $stateProvider
    .state('bootstrap', {
      url: '/bootstrap',
      template: require('./template.html')
    });
};
