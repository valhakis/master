import FooterDirective from './footer.directive';

var mod = angular.module('app.components.footer', []);

mod.directive('footer', FooterDirective);

export default mod.name;
