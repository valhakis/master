'use strict';

class [[name]]Directive {
  constructor() {
    this.template = require('./the.template.html');
  }

  compile(tElem, attrs) {
  }

  link(scope, element, attrs) {
  }

  move(element) {
  }
}

import angular from 'angular';

export default angular
  .module('App.directives.theDirective', [])
  .directive('[[name]]', () => new [[name]]Directive())
  .name;

