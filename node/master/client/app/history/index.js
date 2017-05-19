import './style.scss';
import config from './config';
import angular from 'angular';

import DocumentCodeEditorDirective from './directives/document-code-editor';
import DocumentCodeDirective from './directives/document-code';

var mod = angular.module('history', []);

mod.directive('documentCodeEditor', DocumentCodeEditorDirective);
mod.directive('documentCode', DocumentCodeDirective);

mod.config(config);

export default mod.name;
