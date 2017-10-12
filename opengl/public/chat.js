(function() {
  var socket = io();

  var xForm = document.querySelector('form');
  var xUl = document.querySelector('ul');

  xForm.addEventListener('submit', function(e) {
    e.preventDefault();
    socket.emit('chat message', {
      message: this.elements.message.value
    });
    this.elements.message.value = '';
  });

  socket.on('chat message', function(data) {
    var xLi = document.createElement('li');
    xLi.innerText = data.message;
    xUl.appendChild(xLi);
  });

})();
