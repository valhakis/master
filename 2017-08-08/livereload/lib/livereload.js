window.addEventListener('load', function() {
  var script;

  var start = function() {
    if (!window.socket) {
      window.socket = io();
    }

    socket.on('reload', function() {
      location.reload();
    });
  };

  script = document.querySelector('script[name="socket.io"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('name', 'socket.io');
    script.src = '/socket.io-client/socket.io.min.js';
    script.onload = function() {
      start();
    };
    document.body.appendChild(script);
  } else {
    start();
  }

});
