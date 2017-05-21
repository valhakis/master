import angular from 'angular';

export default angular.module('components.navbar', [])
   .directive('appNavbar', function() {
      return {
         template: require('./template.pug')()
      };
   })
   .name;
