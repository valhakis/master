import './color-box.scss';

import ColorBoxDirective from './color-box.directive';

var mod = angular.module('app.colorBox', []);

mod.directive('colorBox', ColorBoxDirective);

export default mod.name;
