/* global CodeMirror */

var textarea = document.createElement('textarea');

document.body.appendChild(textarea);

var editor = CodeMirror.fromTextArea(textarea, {
  mode: 'htmlmixed',
  lineNumbers: true,
  keyMap: 'vim'
});
