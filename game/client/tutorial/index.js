import angular from 'angular';

var tutorial = angular.module('tutorial', []);

tutorial.config(function config($stateProvider) {
  $stateProvider.state('tutorial', {
    url: '/tutorial',
    template: require('./tutorial.html'),
  });
  $stateProvider.state('tutorial.tutorial01', {
    url: '/tutorial01',
    template: require('./tutorial01/view.html'),
    controller: require('./tutorial01/controller')
  });
  $stateProvider.state('tutorial.tutorial02', {
    url: '/tutorial02',
    template: require('./tutorial02/view.html'),
    controller: require('./tutorial02/controller')
  });
});

export default tutorial.name;
