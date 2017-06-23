import ace from 'brace';

export default function EditorDirective() {
   return {
      template: 'This is editor directive.',
      scope: {
         code: '='
      },
      link: function(scope, element, attributes) {
         $(element).css({
            'height': '300px',
            'display': 'block'
         });
         scope.$watch('code', function(newValue, oldValue) {
            console.log('changed: ', newValue);
         });
         var editor = ace.edit(element[0]);
         editor.setTheme('ace/theme/monokai');
         editor.getSession().setMode('ace/mode/javascript');
         editor.setKeyboardHandler('ace/keyboard/vim');
         ace.config.loadModule('ace/keyboard/vim', function(m) {
            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;
            VimApi.defineEx('write', 'w', function(cm, input) {
               console.log(editor.getValue());
               scope.code = {
                  body: 'working ?'
               };
               console.log(scope.code);
               cm.ace.execCommand('save');
            });
         });
         // scope.code = {
            // body: 'editor has set code'
         // };
      }
   };
}
