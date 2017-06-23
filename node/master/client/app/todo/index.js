import './style.scss';

import angular from 'angular';

export default angular
   .module('app.todo', [])
   .config(require('./config'))
   .factory('Todo', require('./service.js'))
   .name;
