var elements = document.querySelectorAll('raw-code');

elements.forEach(function(element) {
  var xhr = new XMLHttpRequest();
  var lang = element.getAttribute('lang');
  element.style.display = 'block';
  element.innerHTML = 'LOADING ...';
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var source = this.responseText;
      var xPre = document.createElement('pre');
      var xCode = document.createElement('code');
      xPre.appendChild(xCode);

      var code = source;

      xCode.innerHTML = Prism.highlight(code, Prism.languages[element.getAttribute('lang')]);

      element.innerHTML = '';
      element.appendChild(xPre);
    }
  };
  xhr.open('GET', element.getAttribute('file'), true);
  xhr.send(null);
});
