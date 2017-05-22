import './style.scss';

import angular from 'angular';

export default angular
   .module('app.notes', [])
   .config(require('./config'))
   .factory('Note', require('./factory'))
   .name;
