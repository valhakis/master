import angular from 'angular';

let ExampleModule = angular.module('App.example', []);

import ExampleConfig from './example.config';
ExampleModule.config(ExampleConfig);

export default ExampleModule.name;
