'use strict';

import angular from 'angular';

export default angular
  .module('App.home', [])
  .config(routes)
  .name;

// routes
function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: 'this is home template'
    });
}
