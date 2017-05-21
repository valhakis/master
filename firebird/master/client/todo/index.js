import angular from 'angular';

import config from './config';

import TodoService from './service';

export default angular
   .module('app.todo', [])
   .config(config)
   .factory('Todo', TodoService)
   .name;
