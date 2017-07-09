(function() {
  LoadScripts(function(scripts) {
    scripts.forEach((script) => {
      AddScript(`/canvas/scripts/${script}`);
    });
  });
})();

function LoadScripts(callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.open('GET', '/canvas/scripts', true);
  xhr.send(null);
}

function AddScript(src) {
  var script = document.createElement('script');
  script.async = 'async';
  script.src = src;
  document.body.appendChild(script);
}
