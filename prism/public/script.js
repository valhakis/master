var link = document.createElement('link');

link.rel = 'stylesheet';
link.id = 'prism-theme';

var themes = [
  'prism-coy',
  'prism',
  'prism-dark',
  'prism-funky',
  'prism-okaidia',
  'prism-solarizedlight',
  'prism-tomorrow',
  'prism-twilight',
];

link.href = `/prismjs/themes/${themes[4]}.css`;

var xSelect = document.querySelector('#select');
themes.forEach(function(theme, index) {
  var option = document.createElement('option');
  option.value = index;
  option.innerText = theme;
  xSelect.appendChild(option);
});

xSelect.addEventListener('change', function() {
  link.href = `/prismjs/themes/${themes[this.options[this.selectedIndex].value]}.css`;
});

document.head.appendChild(link);

