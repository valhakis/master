import './document.scss';

import angular from 'angular';

import DocumentConfig from './document.config';

var mod = angular.module('app.document', []);

mod.config(DocumentConfig);

export default mod.name;
