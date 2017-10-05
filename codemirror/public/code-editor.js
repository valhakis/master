(function() {

  if (!localStorage.getItem('codemirror-theme')) {
    localStorage.setItem('codemirror-theme', 'default');
  } 

  var link = document.querySelector(`link[name=codemirror-theme]`);
  if (!link) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.setAttribute('name', 'codemirror-theme');
    document.head.appendChild(link);
  }
  var theme = localStorage.getItem('codemirror-theme');
  link.href = '/codemirror/theme/' + theme + '.css?id=' + new Date().getMilliseconds();

  var editors = [];

  var xCodeEditors = document.querySelectorAll('code-editor');

  xCodeEditors.forEach(function(xEditor) {
    var xTextArea = document.createElement('textarea');
    xEditor.appendChild(xTextArea);
    var editor = CodeMirror.fromTextArea(xTextArea, {
      value: 'LOADING THE SOURCE ...',
      lineNumbers: true, 
      mode: xEditor.getAttribute('mode'),
      autofocus: false,
      dragDrop: false,
      theme: theme
    });

    editor.on('change', function() {
      var source = editor.getValue();
    });

    if (xEditor.getAttribute('load')) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          editor.setValue(this.responseText);
        }
      };
      xhr.open('GET', xEditor.getAttribute('load'), true);
      xhr.send(null);
    }

    editors.push(editor);
  });

  // LOADS ALL THEMES FROM THE SERVER
  var xThemeSelect = document.querySelector('select[name="theme-select"]');
  if (xThemeSelect) {
    xThemeSelect.addEventListener('change', function() {
      var link = document.querySelector(`link[name=codemirror-theme]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.setAttribute('name', 'codemirror-theme');
        document.head.appendChild(link);
      }
      var theme = this.value;
      link.href = '/codemirror/theme/' + theme + '?id=' + new Date().getMilliseconds();
      localStorage.setItem('codemirror-theme', theme.slice(0, -4));
      editors.forEach(function(editor) {
        editor.setOption('theme', theme.slice(0, -4));
      });
    });
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var themes = JSON.parse(this.responseText);
        themes.forEach(function (theme) {
          var option = document.createElement('option');
          option.value = theme;
          xThemeSelect.appendChild(option);
          option.innerText = theme;
        });
      }
    };
    xhr.open('GET', '/codemirror/themes-list', true);
    xhr.send(null);
  }
})();
