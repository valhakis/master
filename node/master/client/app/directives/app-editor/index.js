import ace from 'brace';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript.js';
import cpp from 'highlight.js/lib/languages/cpp.js';
import php from 'highlight.js/lib/languages/php.js';
import sql from 'highlight.js/lib/languages/sql.js';
import 'highlight.js/styles/agate.css';

require('brace/mode/xquery');
require('brace/mode/json');
require('brace/mode/javascript');
require('brace/mode/c_cpp');
require('brace/mode/sql');
require('brace/mode/html');
require('brace/mode/makefile');
require('brace/mode/css');
require('brace/mode/php');
require('brace/theme/github');
require('brace/theme/monokai');
require('brace/keybinding/vim');

var modes = [
  'javascript',
  'c', 
  'html', 
  'css',
  'makefile',
  'php',
  'sql',
  'c_cpp'
];

import jsBeautify from 'js-beautify';

// var sample = jsBeautify.js_beautify(script, { indent_size: 2 });

var beautify = function(code) {
  return jsBeautify.js_beautify(code, { indent_size: 2 });
};

module.exports = function directive($timeout) {
  return {
    // require: 'ngModel',
    //scope: {
    // @myText
    // =twoWay
    // &oneWay
    //'eId': '@'
    //},
    //scope: true,
    template: '',
    scope: {
      'bind': '=?',
      'mode': '=?',
      'update': '=?',
      'language': '=?'
    },
    //template: `
    //{{ ::$id }}
    //<div id="editor_{{::$id}}" class="editor"></div>
    //<pre ng-class="{'hide': !code.body}">
    //<code id="code_{{::$id}}" class="code" ng-bind="code.body">
    //</code></pre>
    //`,
    controller: function($scope) {
      $scope.getEditorValue = function() {
      };
    },
    link: function(scope, element, attributes) {
      /*
         scope.code = {
            body: ''
         };
         */

      var xEditor = document.createElement('div');
      xEditor.classList.add('editor');
      xEditor.style.minHeight = '200px';

      // append dom elements to template
      element[0].appendChild(xEditor);

      var editor = ace.edit(xEditor);
      editor.$blockScrolling = Infinity;
      editor.session.setOptions({
        tabSize: 2,
        useSoftTabs: true
      });
      editor.getSession().setMode(`ace/mode/${scope.mode ? scope.mode : 'javascript'}`);
      editor.setTheme('ace/theme/monokai');
      editor.setKeyboardHandler('ace/keyboard/vim');
      ace.config.loadModule('ace/keyboard/vim', function(module) {
        var VimApi = module.CodeMirror.Vim;
        VimApi.defineEx('write', 'w', function(cm, input) {
          cm.ace.execCommand('save');
          /*
               scope.createCode(scope.code);
               */
        });
        VimApi.defineEx('beautify', 'be', function(cm, input) {
          var code = editor.getValue();
          editor.setValue('');
          editor.insert(beautify(code));
        });
      });
      editor.setValue('');
      if (scope.bind) {
        editor.insert(scope.bind);
      }
      if (!scope.update) {
        scope.update = function(code) {
          scope.bind = code.body;
          editor.setValue('');
          editor.insert(scope.bind);
        };
      }
      editor.on('change', function() {
        scope.bind = editor.getValue();
      });
      scope.$watch('mode', function(newValue) {
        if (newValue == 'c') {
          newValue = 'c_cpp';
        } 
        if (newValue == 'c++') {
          newValue = 'c_cpp';
        }
        if (modes.indexOf(newValue) == -1) {
          console.log(`This '${newValue}' mode is not supported.`);
        } else {
          editor.getSession().setMode(`ace/mode/${newValue}`);
        }
      });
    }
  };
};
