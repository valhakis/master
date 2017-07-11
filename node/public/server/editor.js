(function() {
  var editor = document.body.querySelector("#editor");
  var textarea = editor.querySelector("textarea");
  var options = {
    lineNumbers: true
  };
  var editor = CodeMirror.fromTextArea(textarea, options);

  window.editor = editor;
})();
console.log('WHAT IS THIS BAD THING');
