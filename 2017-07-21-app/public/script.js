var elements = document.querySelectorAll('element');

elements.forEach(function(element) {
  var title = element.innerText;
  var file = element.getAttribute('file');
  var type = element.getAttribute('type');
  GetSource(file).then(function(source) {
    source = Prism.highlight(source, Prism.languages[type]);
    element.innerHTML = `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>${title}</h4>
      </div>
      <div class="panel-body">
        <pre><code class="language-${type}">${source}</code></pre>
      </div>
    </div>
    `;
  });
});

function GetSource(path, callback) {
  return new Promise(function(resolve) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      }
    };
    xhr.open('GET', path, true);
    xhr.send(null);
  });
}
