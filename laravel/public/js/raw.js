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

      var code = Prism.plugins.NormalizeWhitespace.normalize(source, {
        'remove-initial-line-feed': true,
        'remove-trailing': true,
        'remove-indent': true,
        'indent': 0,
        'tabs-to-spaces': 2,
        // 'spaces-to-tabs': 2,
        'left-trim': true,
        'right-trim': true,
      });

      xCode.innerHTML = Prism.highlight(code, Prism.languages[element.getAttribute('lang')]);

      element.innerHTML = '';
      element.appendChild(xPre);
    }
  };
  xhr.open('GET', element.getAttribute('file'), true);
  xhr.send(null);
});
