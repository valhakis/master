module.exports = function config($stateProvider) {
  $stateProvider
    .state('movie', {
      url: '/movie',
      template: require('./template.html')
    });
};
