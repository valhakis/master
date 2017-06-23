import angular from 'angular';

export default angular
   .module('directives', [])
   .directive('appCode', require('./app-code'))
   .directive('appEditor', require('./app-editor'))
   .directive('appMainFooter', require('./app-main-footer'))
   .name;
