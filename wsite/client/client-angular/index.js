console.log('CLIENT ANGULAR LOADED');

import angular from 'angular';

import TodoModule from './todo';
import MainNavModule from './main-nav';

var app = angular.module('app', [TodoModule, MainNavModule]);

