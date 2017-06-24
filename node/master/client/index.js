// import './static';

import 'codemirror/lib/codemirror.css';
import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

import 'json-formatter/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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

var textarea = document.createElement('textarea');
textarea.classList.add('editor-textarea');
document.body.appendChild(textarea);

var editor = CodeMirror.fromTextArea(textarea, {
  lineNumbers: true
});
