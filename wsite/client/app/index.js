import angular from 'angular';
import uirouter from '@uirouter/angularjs';

var todo_module = require('./todo_module');
var main_module = require('./main_module');
var directives_module = require('./directives');

var app = module.exports = angular.module('app', [
  uirouter, todo_module, main_module, directives_module,
]);

require('./components/hello');
require('./pages/angular');
require('./pages/angular/directives/menu/angular.menu');

app.config(require('./app.config'));
app.config(require('./app.routes'));
