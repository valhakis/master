import ApplicationInfoDirective from './application-info.directive';

var mod = angular.module('app.components.applicationInfo', []);

mod.directive('applicationInfo', ApplicationInfoDirective);

export default mod.name;
