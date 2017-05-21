import './style.scss';

import angular from 'angular';

var mod = angular.module('app.document', []);

mod.config(require('./config'));
mod.factory('Document', require('./service'));

export default mod.name;
