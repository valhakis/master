var xTextArea = document.querySelector('textarea');
var editor = CodeMirror.fromTextArea(xTextArea, {
  lineNumbers: true, 
  mode: 'htmlmixed'
});
