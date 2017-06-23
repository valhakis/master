import angular from 'angular';
import TutorialRoutes from './tutorial.routes';
import O01Tutorial from './components/O01-tutorial';
import TutorialHandsontable from './components/handsontable';
import TutorialRun from './tutorial.run';
import MongooseModule from './modules/mongoose';

var mod = angular.module('app.tutorial', [
   O01Tutorial,
   TutorialHandsontable,
   MongooseModule
]);

mod.run(TutorialRun);

import BootstrapEditorDirective from './directives/bootstrap-editor.directive';
mod.directive('bootstrapEditor', BootstrapEditorDirective);

mod.config(TutorialRoutes);

export default mod.name;
