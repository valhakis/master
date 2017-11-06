import angular from 'angular';

import MainMenuDirective from './main-menu';
import ExampleDirective from './example';

var mod = angular.module('app.directives', []);
mod.directive('mainMenu', MainMenuDirective);
mod.directive('example', ExampleDirective);

console.log('APP DIRECTIVES');

export default mod.name;


