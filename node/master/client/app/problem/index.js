import angular from 'angular';
import config from './config';

export default angular.module('app.problem', [])
   .config(config)
   .directive('problemList', require('./directives/list'))
   .factory('Problem', require('./factory'))
   .name;
