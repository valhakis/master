class Message {
  constructor(target) {
    this.container = document.querySelector(target);
    this.container.classList.add('messages');

    this.messages = [];
  }

  create(className, msg) {
    var message = document.createElement('div');
    var closeBtn = document.createElement('button');
    var msgSpan = document.createElement('span');

    var sec = 10;

    closeBtn.classList.add('close');
    closeBtn.innerText = 'X';

    var timeoutId;
    var changeTimeout = (sec) => {
      if (sec < 0) {
        this.remove(message);
      } else {
        timeoutId = setTimeout(() => {
          closeBtn.innerText = closeBtn.innerText == 'X' ? parseInt(sec) : 'X';
          sec -= 0.5;
          changeTimeout(sec);
        }, 500);
      }
    };

    changeTimeout(sec);

    closeBtn.addEventListener('click', () => {
      clearTimeout(timeoutId);
      this.remove(message);
    });

    message.appendChild(closeBtn);
    message.classList.add('message');
    message.classList.add(className);

    msgSpan.innerText = msg;
    message.appendChild(msgSpan);

    this.container.appendChild(message);
    this.messages.push(message);
  }

  remove(message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    message.style.opacity = '0.0';
    setTimeout(() => {
      this.container.removeChild(message);
    }, 500);
  }

  info(msg) {
    this.create('info', msg);
  }

  success(msg) {
    this.create('success', msg);
  }

  failure(msg) {
    this.create('failure', msg);
  }

  error(msg) {
    this.create('error', msg);
  }
}

var message = new Message('#messages');

function GetImages(callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var images = JSON.parse(xhr.responseText);
      callback(images);
    }
  };

  xhr.open('GET', '/images');
  xhr.send(null);
}

function AddImages(target, images) {
  images.forEach(source => {
    var container = document.querySelector(target);
    var img = document.createElement('img');
    img.src = 'img/' + source;
    img.style.height = window.innerHeight + 'px';
    img.onerror = function() {
      this.style.display = 'none';
      console.log('IMAGE FAILED TO LOAD');
    };
    container.appendChild(img);
  });
}

function AddImageUrl(id) {
  var input = document.querySelector(id);
  input.placeholder = 'Place image url here.';

  input.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
      var url = input.value;

      message.info('I have to add new image: ' + url);
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          message.info(xhr.responseText);
          console.log(xhr.responseText);
          update();
        }
      };
      xhr.open('POST', '/image/upload');
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({
        url: url
      }));

      event.preventDefault();
      input.value = '';
    }
  });

}
