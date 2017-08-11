console.log('livereload has been loaded');
(function() {
  var script = document.createElement('script');

  script.setAttribute('name', 'socket.io');

  script.src = '/socket.io-client/socket.io.min.js';

  script.onload = function() {
    var socket = io();

    socket.on('reload', function() {
      location.reload();
    });
  };

  document.body.appendChild(script);
})();
