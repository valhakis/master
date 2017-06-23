import angular from 'angular';

export default angular
  .module('app.test', [])
  .config(require('./config'))
  .directive('testEditor', require('./directives/editor'))
  .name;
