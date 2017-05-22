import angular from 'angular';

export default angular
   .module('app.tutorial', [])
   .config(require('./config'))
   .factory('Tutorial', require('./factory'))
   .directive('tutorialSingleCodeLatest', require('./single/code/directives/latest'))
   .directive('tutorialList', require('./directives/tutorial-list'))
   .name;
