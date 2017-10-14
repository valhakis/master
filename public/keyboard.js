(function() {
  var active = false;
  var buffer = '';

  var container = document.createElement('div');
  container.style.backgroundColor = '#111';
  container.style.position = 'fixed';
  container.style.bottom = '0px';
  container.style.left = '0px';
  container.style.right = '0px';
  container.style.height = '25px';
  container.style.color = '#FFF';
  container.style.display = 'none';
  container.style.paddingLeft = '3px';
  document.body.appendChild(container);

  var activate = function() {
    container.style.display = 'block';
    active = true;
  };

  var deactivate = function() {
    container.style.display = 'none';
    active = false;
    resetBuffer();
  };

  var updateBuffer = function() {
    container.innerText = buffer;
  };

  var resetBuffer = function() {
    buffer = '';
    updateBuffer();
  };

  var addCharacterToBuffer = function(character) {
    buffer += character;

    updateBuffer();
  };

  var execute = function() {
    if (buffer == 'site') {
      window.location.href = '/site';
    } else if (buffer == 'google') {
      window.location.href = 'https://www.google.com/';
    } else {
      console.log(buffer);
    }

    deactivate();
  };

  window.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
      deactivate();
    } 
    if (event.key == 'Enter') {
      execute();
    }
  });

  window.addEventListener('keypress', function(event) {
    if (active) {
      addCharacterToBuffer(event.key);
    }

    if (event.key == ',') {
      activate();
    }
    if (active) {
      event.preventDefault();
    }
  });

})();

