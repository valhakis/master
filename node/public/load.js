(function() {

  var loadSource = function(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    };
    xhr.open('GET', path, true);
    xhr.send(null);
  };

  var buildElement = function(element) {
    var path = element.getAttribute('path');
    loadSource(path, function(source) {
      element.setAttribute('source', source);
    });
    element.addEventListener('click', function() {
      editor.setValue(this.getAttribute('source'));
      editor.setOption('mode', this.getAttribute('mode'));
    });
  };

  var elements = document.body.querySelectorAll('load');
  elements.forEach(function(element) {
    buildElement(element);
  });

})();
