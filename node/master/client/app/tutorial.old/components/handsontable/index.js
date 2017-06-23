import angular from 'angular';

import HandsontableRoutes from './handsontable.routes';

var mod = angular.module('tutorial.handsontable', []);

mod.config(HandsontableRoutes);

export default mod.name;
