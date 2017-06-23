import './style.scss';
import angular from 'angular';

export default angular
   .module('app.snipper', [])
   .config(require('./config'))
   .factory('Snippet', require('./service'))
   .directive('snippetPreview', require('./directives/preview'))
   .component('snippets', require('./components/snippets'))
   .name;
