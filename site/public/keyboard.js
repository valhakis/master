(function() {

  function Modal() {
    this.container = document.createElement('div');
    this.container.classList.add('modal');
    var closeBtn = document.createElement('span');
    closeBtn.innerText = 'X';
    closeBtn.classList.add('close');
    this.container.appendChild(closeBtn);
    document.body.appendChild(this.container);
    window.addEventListener('keydown', (event) => {
      if (event.key == 'Escape') {
        this.hide();
      }
    });
    this.show = function() {
      this.container.classList.add('active');
    };
    this.hide = function() {
      this.container.classList.remove('active');
    };
    this.toggle = function() {
      if (this.container.classList.contains('active')) {
        this.hide();
      } else {
        this.show();
      }
    };
    closeBtn.addEventListener('click', (e) => {
      this.hide();
    });
  }

  var modal = new Modal();

  var status = document.createElement('div');

  status.id = 'status';
  var active = false;

  document.body.appendChild(status);

  var buffer = '';
  var prev = null;

  var resetBuffer = function() {
    buffer = '';
    status.innerText = buffer;
  };
  var setActive = function() {
    status.classList.add('active');
    active = true;
  };
  var setNotActive = function() {
    status.classList.remove('active');
    active = false;
    resetBuffer();
  };
  var bufferAdd = function(character) {
    buffer += character;

    status.innerText = buffer;
  };
  var bufferRemoveLastCharacter = function() {
    buffer = buffer.slice(0, -1);
    status.innerText = buffer;
  };
  var executeBuffer = function() {
    if (buffer == 'gg') {
      window.scrollTo(0, 0);
    } else if (buffer == 'home') {
      window.location.href = '/';
    } else if (buffer == 'go posts') {
      window.location.href = '/site/posts';
    } else if (buffer == 'go colors') {
      window.location.href = '/site/colors';
    } else if (buffer == 'modal') {
      modal.toggle();
    }

    resetBuffer();
    setNotActive();
  };

  window.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
      setNotActive();
    }
    if (event.key == 'Backspace') {
      bufferRemoveLastCharacter();
    }
  });

  var keys = '';

  window.addEventListener('keypress', function(event) {
    if (active) {
      if (event.key == 'Enter') {
        executeBuffer();
      } else {
        bufferAdd(event.key);
      }
    }

    if (!prev && event.key == ',') {
      prev = ','
    }
    var commands = [',m', ',okei'];
    if (prev == ',') {
      keys += event.key;
      var found = true;
      for (var j=0; j<commands.length; j++) {
        for (var i=0; i<keys.length; i++) {
          if (commands[j][i] != keys[i]) {
            found = false;
            break;
          }
        }
      }
      if (!found) {
        keys = '';
      }
      //if (event.key == 'm') {
      //}
      if (keys == ',m') {
        setActive();
        keys = '';
      }
    }
    if (active) {
      event.preventDefault();
    }
  });
})();
