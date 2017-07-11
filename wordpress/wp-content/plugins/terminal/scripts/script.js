window.addEventListener('load', function() {
  // var terminal = document.querySelector('#terminal');
  var terminal = document.createElement('div');
  terminal.id = 'terminal';
  document.body.appendChild(terminal);

  var Log = function(msg) {
    var div = document.createElement('div');
    div.innerText = msg;
    terminal.appendChild(div);
  };

  Log("I have no idea");
  Log("I have no idea");
  Log("I have no idea");
  Log("I have no idea");
});
