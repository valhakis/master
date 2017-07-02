var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

fun.loadSource('source.txt', function(source) {
  for (var x=0; x<source.length; x++)
  {
    var char = source[x];
    if (char == '“' || char == '”') {
      char = '"';
    } else if (char == '’') {
      char = '\'';
    } else if (char == '–') {
      char = '-';
    }
    var span = document.createElement('span');
    if (char == '\n') {
      span.classList.add('letter', 'newline');
    } else {
      span.classList.add('letter');
    }
    span.innerText = char;
    span.addEventListener('click', fun.activate);
    container.appendChild(span);
  }
  container.querySelector('.letter').classList.add('active');
});

document.addEventListener('keydown', function(event) {
  if (event.key == 'Backspace') {
    var active = container.querySelector('.active');
    active.classList.remove('active');
    active = active.previousElementSibling;
    if (active.classList.contains('newline') && active.previousElementSibling.classList.contains('newline')) {
      active = active.previousElementSibling;
    }
    active.classList.remove('wrong', 'right');
    active.classList.add('active');
  } else if (event.key == 'Shift') {

  } else {
    var active = container.querySelector('.active');
    if (event.key == active.innerText) {
      active.classList.add('right');
    } else {
      active.classList.add('wrong');
    }
    active.classList.remove('active');
    active = active.nextElementSibling
    if (active.classList.contains('newline') && active.nextElementSibling.classList.contains('newline')) {
      active = active.nextElementSibling;
    }
    active.classList.add('active');
  }

  switch (event.key)
  {
    case 'Backspace':
    case ' ':
      event.preventDefault();
      break;
    default: break;
  }

  var active = document.querySelector('.active');
  window.scrollTo(0, active.offsetTop);
});
