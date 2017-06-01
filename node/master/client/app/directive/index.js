import './style.scss';

import angular from 'angular';

export default angular
  .module('app.directive', [])
  .config(require('./config'))
  .name;
