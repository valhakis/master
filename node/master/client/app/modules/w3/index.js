import angular from 'angular';
import 'fontawesome';

import W3Routes from './w3.routes';

export default angular.module('modules.w3', [])
   .config(W3Routes)
   .name;
