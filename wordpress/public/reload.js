var host = document.currentScript.getAttribute('host');
var port = document.currentScript.getAttribute('port');

var socket = io(`http://${host}:${port}`);

socket.on('reload', function() {
  location.reload();
});
