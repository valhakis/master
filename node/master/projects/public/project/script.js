var api = '/projects/api';

var path = location.pathname;
var elems = path.split('/');
var projectId = elems[3];
console.log('PROJECT ID:', projectId);

(function() {
  var form = document.querySelector('#add-description-form');
  if (form) {
    form.onsubmit = function(event) {
      var description = this.elements.description.value;
      event.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          location.reload();
        }
      };
      xhr.open('PUT', `${api}/projects/${projectId}/description`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({ description: description }));
    };
  }
})();

(function() {
  var form = document.querySelector('#add-note-form');
  if (form) {
    form.onsubmit = function(event) {
      event.preventDefault();
      var note = this.elements.note.value;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
          console.log(xhr.responseText);
        }
      };
      xhr.open('POST', `${api}/projects/${projectId}/notes`);
      xhr.send(null);
      return false;
    };
  }
})();
