var els = document.querySelectorAll('raw-code');
els.forEach(el => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var source = this.responseText;
      var xCode = document.createElement('code');
      var xPre = document.createElement('pre');
      xPre.appendChild(xCode);
      el.appendChild(xPre);

      var code = Prism.highlight(source, Prism.languages[el.getAttribute('language')]);

      xCode.innerHTML = code;
    }
  };
  xhr.open('GET', '/express/raw/' + el.getAttribute('file'), true);
  xhr.send(null);
});
