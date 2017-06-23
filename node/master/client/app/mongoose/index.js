import angular from 'angular';
import config from './config';

var mod = angular.module('app.mongoose', []);

mod.config(config);

export default mod.name;
