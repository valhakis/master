import angular from 'angular';
import NavbarDirective from './navbar.directive';

var mod = angular.module('app.components.navbar', []);

mod.directive('navbar', NavbarDirective);

export default mod.name;
