module.exports = function config($stateProvider) {
  $stateProvider
    .state('test', {
      url: '/test',
      template: require('./template.html')
    });
};
