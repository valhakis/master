import angular from 'angular';

var mod = angular.module('app.directives', []);

mod.directive('latestTodos', require('./latest-todos'));

module.exports = mod.name;
