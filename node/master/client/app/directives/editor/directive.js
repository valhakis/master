import ace from 'brace';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript.js';
import cpp from 'highlight.js/lib/languages/cpp.js';
import 'highlight.js/styles/agate.css';
require('brace/mode/javascript');
require('brace/mode/c_cpp');
require('brace/mode/html');
require('brace/mode/css');
require('brace/theme/monokai');
require('brace/keybinding/vim');

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
         'bind': '=',
         'mode': '@'
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
         scope.code = {
            body: ''
         };

         var xEditor = document.createElement('div');
         xEditor.classList.add('editor');

         // append dom elements to template
         element[0].appendChild(xEditor);

         var editor = ace.edit(xEditor);
         editor.$blockScrolling = Infinity;
         editor.getSession().setMode(`ace/mode/${scope.mode}`);
         editor.setTheme('ace/theme/monokai');
         editor.setKeyboardHandler('ace/keyboard/vim');
         ace.config.loadModule('ace/keyboard/vim', function(module) {
            var VimApi = module.CodeMirror.Vim;
            VimApi.defineEx('write', 'w', function(cm, input) {
               cm.ace.execCommand('save');
               scope.createCode(scope.code);
            });
         });
         editor.setValue('');
         editor.insert(scope.bind);
         editor.on('change', function() {
            scope.bind = editor.getValue();
         });
      }
   };
};
