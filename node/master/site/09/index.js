var h1 = document.querySelector('h1');
var first = document.querySelector('#first');

h1.addEventListener('click', function() {
  first.innerText = 'First section: modified version.';
});

first.addEventListener('click', function() {
  h1.style.textAlign = 'center';
});
