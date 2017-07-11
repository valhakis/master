(function() {
  var codes = document.body.querySelectorAll('raw-code');

  var LoadSource = function(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    };
    xhr.open('GET', `/template_engines/raw/${path}`, true);
    xhr.send(null);
  };

  var update = function(source) {
    this.innerHTML = `<pre><code>${source}</code></pre>`;
    var code = this.querySelector('pre code');
    code.classList.add(this.getAttribute('type'));
    hljs.highlightBlock(code);
  };

  codes.forEach(function(code) {
    var file = code.getAttribute('file');
    LoadSource(file, update.bind(code));
  });
})();
