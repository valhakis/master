import 'json-formatter/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'w3-css/w3.css';
import angular from 'angular';
import 'highlight.js';

import $ from 'jquery';
import hljs from 'highlightjs';

import app from './app';
// import reactApp from './react-app';

$(document).ready(function() {
   $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
   });
});
