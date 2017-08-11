var allMessages = [];
var socket;

document.querySelector('#numOnline').innerText = `Num online: ${'10'}`;

var username = 'username';

function setUsername() {
  var person = prompt("Please enter your name", "Harry Potter");
  localStorage.setItem('username', person);
  setCookie('username', person, 365);
}

if (!localStorage.username) {
  setUsername();
}

var allMessages = localStorage.allMessages;

if (allMessages) {
  allMessages = JSON.parse(allMessages);
} else {
  allMessages = [];
}


$(function () {

  socket = io();

  socket.on('reload', function() {
    // window.location.reload(true);
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  });

  socket.on('messages', function(messages) {
    messages.forEach(function(msg){
      $('#messages').append($('<li>').text(`${msg.username}: ${msg.msg}`));
      scrollBottom();
    });
  });

  $('form').submit(function(){
    var msg = $('#m').val();
    socket.emit('chat message', {
      username: getCookie('username'),
      msg: msg
    });
    // socket.emit('chat message', `${getCookie('username')}: ${msg}`);
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(`${msg.username}: ${msg.msg}`));
    var message = new SpeechSynthesisUtterance(msg.msg);
    message.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
    speechSynthesis.speak(message);
    allMessages.push(msg);
    localStorage.setItem('allMessages', JSON.stringify(allMessages));
    window.scrollTo(0, document.body.scrollHeight);
    scrollBottom();
  });
  socket.on('num_online', function(num_online){
    document.querySelector('#numOnline').innerText = `Num online: ${num_online}`;
  });
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// document.querySelector("isOnline").innerText = `Online: 32`;


function scrollBottom() {
  var item = document.querySelector("#messages");
  item.scrollTop = item.scrollHeight;
}

function clearChat() {
  localStorage.setItem('allMessages', JSON.stringify([]));
  location.reload();
}

function Player(name) {
  this.isWinner = false;

  this.name = name;
  this.totalPoints = 0;

  this.vote1 = 0;
  this.vote2 = 0;
  this.vote3 = 0;
}

function Game() {
  var players = [];
  var ruudi = new Player('Ruudi');
  var fox = new Player('WhiteFox');

  players.push(ruudi);
  players.push(fox);

  ruudi.vote1 = 8;
  ruudi.vote2 = 5;
  ruudi.vote3 = 10;

  fox.vote1 = 8;
  fox.vote2 = 4;
  fox.vote3 = 9;

  var table = document.createElement('table');
  var caption = document.createElement('caption');
  caption.innerText = 'Bread';
  table.appendChild(caption);

  table.border = '1';
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.innerText = 'Name';
  tr.appendChild(th);
  table.appendChild(tr);

  th = document.createElement('th');
  th.innerText = 'Vote 1';
  tr.appendChild(th);
  th = document.createElement('th');
  th.innerText = 'Vote 2';
  tr.appendChild(th);
  th = document.createElement('th');
  th.innerText = 'Vote 3';
  tr.appendChild(th);

  th = document.createElement('th');
  th.innerText = 'Total Points';
  tr.appendChild(th);

  players.forEach(function(player) {
    var td
    var tr = document.createElement('tr');

    td = document.createElement('td');
    td.innerText = player.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = player.vote1;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = player.vote2;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = player.vote3;
    tr.appendChild(td);

    td = document.createElement('td');
    player.totalPoints = player.vote1 + player.vote2 + player.vote3;
    td.innerText = player.totalPoints;
    tr.appendChild(td);

    table.appendChild(tr);
  });

  this.container = document.querySelector("#game");

  this.container.appendChild(table);
}

var game = new Game();

var editor;

(function() {
  var textarea = document.querySelector("#editor");
  editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
  });

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      var source = this.responseText;
      editor.setValue(source);
      editor.setOption('mode', 'text/css');
    }
  };
  xhr.open('GET', 'style.css', true);
  xhr.send(null);
})();

function editorSave() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      var style = document.querySelector("link[name=style]");
      style.setAttribute('href', '/style.css?v=' + Math.random(0, 10000));
      socket.emit('reload');
      // location.reload();
    }
  };
  xhr.open('POST', '/style', true);
  xhr.send(editor.getValue());
}

$(window).bind('keydown', function(event) {
  if (event.ctrlKey || event.metaKey) {
    switch (String.fromCharCode(event.which).toLowerCase()) {
      case 's':
        event.preventDefault();
        editorSave();
        // alert('ctrl-s');
        break;
      case 'f':
        //event.preventDefault();
        //alert('ctrl-f');
        break;
      case 'g':
        //event.preventDefault();
        //alert('ctrl-g');
        break;
    }
  }
});
