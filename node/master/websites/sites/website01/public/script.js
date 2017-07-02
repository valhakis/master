var root = '/websites/website1';
var handlebars = Handlebars;
var dataApi = '/websites/website1/data';

(function() {

  if (document.querySelector('#nav-template')) {
    LoadTemplate('nav.hbs', function(template) {
      var html = template({});
      document.querySelector('#nav-template').innerHTML = html;
    });
  }

  if (document.querySelector('#login-template')) {
    LoadTemplate('login.hbs', function(template) {
      var html = template({});
      document.querySelector('#login-template').innerHTML = html;
    });
  }

  if (document.querySelector('#users-template')) {
    LoadData('/users', function(users) {
      LoadTemplate('users.hbs', function(template) {
        var html = template({ users: users });
        document.querySelector('#users-template').innerHTML = html;
      });
    });
  }

})();

function LoadData(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      callback(JSON.parse(this.responseText));
    }
  };

  xhr.open('GET', dataApi + '/users', true);
  xhr.send(null);
}

function LoadTemplate(path, callback) {
  LoadTemplateFile(path, function(source) {
    callback(handlebars.compile(source));
  });
}

function LoadTemplateFile(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      callback(this.responseText);
    }
  };
  xhr.open('GET', root + '/templates/' + path);
  xhr.send(null);
}
