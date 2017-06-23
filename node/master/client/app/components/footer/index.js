import angular from 'angular';
import FooterDirective from './footer.directive';

var mod = angular.module('app.components.footer', []);

mod.directive('appFooter', FooterDirective);

export default mod.name;
