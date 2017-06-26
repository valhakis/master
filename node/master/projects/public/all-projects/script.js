var api = '/projects/api';
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200)
  {
    var source = `
      {{#each projects}}
        <div class="project">
          <h2>{{name}}</h2>
          <hr>
          <div class="description">{{ description }}</div>
          <br>
          <div>
          <a href="/projects/project/{{id}}">open project</a>
          </div>
          <div class="info-box">
            <span>ID: </span> {{id}}
          </div>
        </div>
      {{/each}}
    `;
    var projects = JSON.parse(xhr.responseText);
    var template = Handlebars.compile(source);
    var html = template({ projects: projects });
    document.querySelector('#projects-output').innerHTML = html;
  }
};

xhr.open('GET', api + '/projects', true);
xhr.send(null);
