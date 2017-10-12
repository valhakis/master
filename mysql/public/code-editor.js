(function() {
  var theme = localStorage.getItem('codemirror-theme');
  if (theme) {
    var link = document.querySelector(`link[name=codemirror-theme]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('name', 'codemirror-theme');
      document.head.appendChild(link);
    }
    link.href = '/codemirror/theme/' + theme + '.css?id=' + new Date().getMilliseconds();
  } else {
    theme = 'default';
  }

  var xTextAreas = document.querySelectorAll("textarea[code-editor]");

  xTextAreas.forEach(function(xTextArea) {
    var editor = CodeMirror.fromTextArea(xTextArea, {
      lineNumbers: true, 
      mode: xTextArea.getAttribute('mode'),
      theme: theme
    });
  });
})();
