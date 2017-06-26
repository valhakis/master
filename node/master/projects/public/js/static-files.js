var url = '/projects/api';
var staticFiles = document.querySelector('#static-files');

if (staticFiles) {
  var source = `
    <div>
      {{#each files}}
        <div class="box">
          <h2>{{name}}</h2>
          <pre><code class="{{hl}}">{{source}}</code></pre>
        </div>
      {{/each}}
    </div>
  `;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4)
    {
      var files = JSON.parse(xhr.responseText);

      var template = Handlebars.compile(source);
      var html = template({files: files});
      staticFiles.innerHTML = html;
      var codes = staticFiles.querySelectorAll('code');
      codes.forEach(function(block) {
        hljs.highlightBlock(block);
        console.log(block);
      });
    }
  }

  xhr.open('GET', url + '/static-files', true);
  xhr.send(null);
}
