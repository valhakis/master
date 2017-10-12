var keys = {
  w: false,
  a: false,
  s: false,
  d: false,
	
  i: false,
  j: false,
  k: false,
  l: false,
};

window.addEventListener('keydown', function(event) {
  if (event.key == 'w') {
    keys['w'] = true;
  }
  if (event.key == 'a') {
    keys['a'] = true;
  }
  if (event.key == 's') {
    keys['s'] = true;
  }
  if (event.key == 'd') {
    keys['d'] = true;
  }
  
  if (event.key == 'i') {
    keys['i'] = true;
  }
  if (event.key == 'j') {
    keys['j'] = true;
  }
  if (event.key == 'k') {
    keys['k'] = true;
  }
  if (event.key == 'l') {
    keys['l'] = true;
  }
});

window.addEventListener('keyup', function(event) {
  if (event.key == 'w') {
    keys['w'] = false;
  }
  if (event.key == 'a') {
    keys['a'] = false;
  }
  if (event.key == 's') {
    keys['s'] = false;
  }
  if (event.key == 'd') {
    keys['d'] = false;
  }
  
  if (event.key == 'i') {
    keys['i'] = false;
  }
  if (event.key == 'j') {
    keys['j'] = false;
  }
  if (event.key == 'k') {
    keys['k'] = false;
  }
  if (event.key == 'l') {
    keys['l'] = false;
  }
});

exports.keys = keys;
