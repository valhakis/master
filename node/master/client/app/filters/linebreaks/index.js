import angular from 'angular';

export default angular
   .module('filters.linebreaks', [])
   .filter('linebreaks', require('./filter'))
   .name;
