import angular from 'angular';
import config from './config';

var mod = angular.module('app.book', []);

mod.config(config);

export default mod.name;
