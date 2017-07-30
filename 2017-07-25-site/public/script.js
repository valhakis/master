var socket = io();

var index = 0;

socket.on('hi', function() {
  console.log('welcome message');
});

socket.on('reload', function() {
  location.reload();
});
