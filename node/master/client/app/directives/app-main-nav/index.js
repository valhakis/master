import angular from 'angular';

var mod = angular.module('app.appMainNav', []);

mod.directive('appMainNav', function AppMainNavDirective() {
   return {
      template: require('./template.pug')()
   };
});

export default mod.name;
