import './style.scss';
import angular from 'angular';

export default angular
  .module('app.node', [])
  .config(require('./config'))
  .factory('Node', require('./factory'))
  .name;
