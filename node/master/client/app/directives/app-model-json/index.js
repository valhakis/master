import './style.scss';
import angular from 'angular';

export default angular
   .module('directives.modelJson', [])
   .directive('appModelJson', require('./directive'))
   .name;
