import angular from 'angular';
import config from './config';

var mod = angular.module('modules.code', []);

mod.config(config);

export default mod.name;
