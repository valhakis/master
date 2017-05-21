import angular from 'angular';
import ace from 'brace';
require('brace/mode/javascript');
require('brace/theme/monokai');

import './style.scss';

export default angular
   .module('directives.editor', [])
   .directive('appEditor', require('./directive'))
   .name;
