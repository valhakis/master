(function() {
  var container = document.body.querySelector("#main-editor");
  var textarea = container.querySelector("textarea");
  var options = {
    lineNumbers: true
  };
  var editor = CodeMirror.fromTextArea(textarea, options);

  window.editor = editor;
})();
