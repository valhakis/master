import ace from 'brace';

require('brace/mode/javascript');
require('brace/mode/c_cpp');
require('brace/mode/css');
require('brace/theme/monokai');
require('brace/keybinding/vim');

export default function DocumentCodeEditorDirective() {
   return {
      template: `
         <div class="editor"></div>
      `,
      controller: function($scope) {
         $scope.title = 'SCOPE TITLE';

      },
      link: function(scope, element, attributes) {
         var x_editor = element[0].getElementsByClassName('editor')[0];

         /*
         ace.config.loadModule('ace/keyboard/vim', function(module) {
            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;
            VimApi.defineEx('write', 'w', function(cm, input) {
               console.log('VIM WRITE');
               cm.ace.execCommand('save');
            });
         });
         */
         //var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;
         ace.config.loadModule('ace/keyboard/vim', function(module) {
            var VimApi = module.CodeMirror.Vim;
            VimApi.defineEx('write', 'w', function(cm, input) {
               cm.ace.execCommand('save');
               scope.setAndAddCode(scope.code);
            });
         });

         var editor = ace.edit(x_editor);
         editor.$blockScrolling = Infinity;
         editor.getSession().setMode('ace/mode/javascript');
         editor.setTheme('ace/theme/monokai');
         editor.setKeyboardHandler('ace/keyboard/vim');

         scope.updateLangugage = function(something) {
            if (scope.code.language.value === 'c' || scope.code.language.value === 'c++') {
               scope.code.language.value = 'c_cpp';
            }
            editor.getSession().setMode(`ace/mode/${scope.code.language.value}`);
            // console.log('updated required', scope.code.language);
         };

         scope.setAndAddCode = function(code) {
            code.body = editor.getValue();
            scope.addCode(code);
            editor.setValue('');
         };

      }
   };
}
