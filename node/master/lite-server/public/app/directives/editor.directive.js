angular.module('app').directive('appEditor', function() {
   return {
      template: `
         <div>
            <h1>Editor.</h1>
            <div class="editor"></div>
            <p>Dolor numquam distinctio accusamus porro excepturi. Dolorem maxime consequuntur minus corporis delectus animi possimus dolorem pariatur optio amet eius. Itaque deleniti consequuntur quia impedit vel dolore debitis. Necessitatibus magni assumenda?</p>
            <div class="w3-panel w3-red" ng-repeat="code in codes">
               <p>ID: {{ code._id }}</p>
               <hi-code body="code.body"></hi-code>
            </div>
         </div>
      `,
      controller: function($scope, CodeService) {
         $scope.create = function(code) {
            CodeService.create(code, function() {
               $scope.getLatest();
            });
         };

         $scope.getLatest = function() {
            CodeService.latest(function(codes) {
               $scope.codes = codes;
            });
         };

         (function() {
            $scope.getLatest();
         })();
      },
      link: function(scope, element, attributes) {

         var x_editor = element[0].getElementsByClassName('editor')[0];

         var editor = ace.edit(x_editor);
         editor.setTheme('ace/theme/monokai');
         editor.getSession().setMode('ace/mode/javascript');
         editor.setKeyboardHandler('ace/keyboard/vim');

         ace.config.loadModule('ace/keyboard/vim', function(m) {
            var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;
            VimApi.defineEx('write', 'w', function(cm, input) {
               var code = {
                  body: editor.getValue()
               };
               scope.create(code, function() {
                  scope.getLatest();
               });
               cm.ace.execCommand('save');
            });
         });
      }
   };
});
