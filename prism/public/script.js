var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var themes = JSON.parse(this.responseText);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'prism-theme';
    link.href = `/prismjs/themes/${themes[4]}`;

    var xSelect = document.querySelector('#select');
    themes.forEach(function(theme, index) {
      var option = document.createElement('option');
      option.value = index;
      option.innerText = theme;
      xSelect.appendChild(option);
    });

    xSelect.addEventListener('change', function() {
      link.href = `/prismjs/themes/${themes[this.options[this.selectedIndex].value]}`;
    });

    document.head.appendChild(link);
  }
};
xhr.open('GET', '/prism/themes', true);
xhr.send(null);

