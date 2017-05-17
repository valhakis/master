import angular from 'angular';

export class ExampleComponent {
  constructor() {
    'ngInject';
  }
}

let ExampleModule = angular.module('App.phoneList', []);

ExampleModule.component('appExample', {
  template: require('./example.template.html'),
  controller: ExampleComponent
});

export default ExampleModule.name;

