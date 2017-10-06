
// raw-code elements
(function() {
  var xRawCodes = document.querySelectorAll("raw-code");
  xRawCodes.forEach(function(xRawCode) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var source = this.responseText;
        var xPre = document.createElement('pre');
        var xCode = document.createElement('code');
        xPre.appendChild(xCode);

        var code = source;

        xCode.innerHTML = Prism.highlight(code, Prism.languages[xRawCode.getAttribute('language')]);

        xRawCode.appendChild(xPre);
      }
    };
    xhr.open('GET', '/pug/raw/' + xRawCode.getAttribute('file'), true);
    xhr.send(null);
  });
})();
