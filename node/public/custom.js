function AddScripts(done) {
  var xLoading = document.createElement('div');
  xLoading.style.position = 'fixed';
  xLoading.style.backgroundColor = '#000';
  xLoading.style.top = '0px';
  xLoading.style.left = '0px';
  xLoading.style.right = '0px';
  xLoading.style.bottom = '0px';
  document.body.appendChild(xLoading);

  var scripts = [
    '/prismjs/themes/prism-dark.css',
    '/style.css',
    '/node/style.css',
    '/prismjs/prism.js',
    '/prismjs/components/prism-c.js',
    '/prismjs/components/prism-cpp.js',
  ];

  var index = scripts.length - 1;

  function LoadScripts(cb, done) {

    if (index < 0) {
      return done('ALL SCRIPTS AREA LOADED');
    }

    var src = scripts[-(index-scripts.length+1)];
    var ext = src.split('.').pop();

    var xScript;

    if (ext == 'js') {
      xScript = document.createElement('script');
      document.body.appendChild(xScript);
      xScript.src = src;
    } else if (ext == 'css') {
      xScript = document.createElement('link');
      document.head.appendChild(xScript);
      xScript.rel = 'stylesheet';
      xScript.href = src;
    }

    xScript.async = "async";

    xScript.addEventListener('load', function() {
      index -= 1;
      LoadScripts(null, done);
    });
  }

  LoadScripts(null, function(data) {
    document.body.removeChild(xLoading);
    done();
  });
}

AddScripts(function() {
  console.log('ALL SCRIPTS ARE LOADED');
  var xElements = document.querySelectorAll('custom-raw-code');
  xElements.forEach(function(xElement) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var source = this.responseText;

        var xPre = document.createElement('pre');
        var xCode = document.createElement('code');
        xPre.appendChild(xCode);
        xElement.appendChild(xPre);

        var code = Prism.highlight(source, Prism.languages[xElement.getAttribute('lang')]);
        xCode.innerHTML = code;
      }
    };
    xhr.open('GET', '/node/raw/' + xElement.getAttribute('file'), true);
    xhr.send(null);

  });
});
