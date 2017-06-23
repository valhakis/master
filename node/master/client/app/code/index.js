import angular from 'angular';
import config from './config';

var mod = angular.module('modules.code', []);

mod.config(config);
mod.factory('Code', require('./service'));

export default mod.name;
