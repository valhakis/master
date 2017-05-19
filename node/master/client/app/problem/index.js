import angular from 'angular';
import config from './config';

var mod = angular.module('app.problem', []);

mod.config(config);

export default mod.name;
