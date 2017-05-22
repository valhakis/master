import angular from 'angular';

import LinebreaksFilter from './linebreaks';

export default angular
   .module('filters', [LinebreaksFilter])
   .filter('notNull', require('./not-null'))
   .name;
