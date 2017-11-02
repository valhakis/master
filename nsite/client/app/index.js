import angular from 'angular';
import uirouter from '@uirouter/angularjs';

var app = module.exports = angular.module('app', [
  uirouter
]);

require('./components/hello');

app.config(require('./app.config'));
