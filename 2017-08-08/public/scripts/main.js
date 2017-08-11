var cookies = {};

cookies.chat = getCookie('chat');
cookies.username = getCookie('username');

if (cookies.username == '') {
  cookies.username = 'no name set';
  setCookie('username', cookies.username, 365);
}

if (cookies.chat == '') {
  var chat = {
    layout: 'chat-fixed'
  };
  setCookie('chat', JSON.stringify(chat), 365);
} else {
  cookies.chat = JSON.parse(cookies.chat);
}

if (!window.socket) {
  window.socket = io();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

(function() {
  var chat = document.querySelector("#chat");

  if (cookies.chat.layout == 'chat-fixed') {
    chat.classList.add('chat-fixed');
  }

  var loadMessages = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.responseText));
      }
    };
    xhr.open('GET', '/messages', true);
    xhr.send(null);
  };
  loadMessages(function(messages) {
    messages.forEach(function(data) {
      addMessage({
        username: data.username,
        type: 'user-message',
        message: data.message
      });
    });
  });

  var settingsForm = chat.querySelector("form[name='chat-settings']");
  var form = chat.querySelector("form[name='chat.main']");
  var messages = chat.querySelector("ul");

  var setUsernameInput = settingsForm.querySelector('input[name="set-username"]');

  setUsernameInput.value = cookies.username;

  setUsernameInput.addEventListener('change', function() {
    cookies.username = this.value;
    setCookie('username', cookies.username, 365);
  });

  var select = settingsForm.querySelector('select');
  var options = select.querySelectorAll('option');
  options.forEach(function(option, index) {
    if (option.value == cookies.chat.layout) {
      select.selectedIndex = index;
    }
  });
  select.addEventListener('change', function() {
    cookies.chat.layout = this.value;
    setCookie('chat', JSON.stringify(cookies.chat), 365);

    chat.className = `chat ${this.value}`;
  });

  var scrollBottom = function() {
    messages.scrollTop = messages.scrollHeight;
  };

  var addMessage = function(data) {
    var li = document.createElement('li');

    var spans = {
      username: document.createElement('span'),
      separator: document.createElement('span'),
      content: document.createElement('span')
    };

    spans.username.innerText = data.username;
    spans.separator.innerText = ': ';
    spans.content.innerText = data.message;

    spans.username.classList.add('username');
    spans.content.classList.add('content');

    li.appendChild(spans.username);
    li.appendChild(spans.separator);
    li.appendChild(spans.content);

    messages.appendChild(li);
    scrollBottom();
  };

  socket.on('chat.message', function(data) {
    addMessage({
      username: data.username,
      type: 'user-message',
      message: data.message
    });
  });

  socket.on('chat.new-connection', function(data) {
    addMessage({
      username: 'server',
      type: 'server-message',
      message: data.message
    });
  });

  form.onsubmit = function() {
    var input = this.querySelector("input");
    var message = input.value;

    if (message == '') {
      return false;
    }

    socket.emit('chat.message', {
      username: cookies.username,
      message: message
    });

    input.value = '';
    return false;
  };

  settingsForm.onsubmit = function() {

    return false;
  };

})();

class Todo {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  save(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    };
    xhr.open('POST', '/api/todos', true);
    xhr.send(JSON.stringify({
      title: this.title,
      content: this.content
    }));
  }
}

// var todo = new Todo();
// todo.createTable();

class TodoApplication {
  constructor(container) {
    this.container = document.querySelector(container);
    this.newTodo = {
      form: this.container.querySelector("form[name='new-todo']"),
      submit: function(event) {
        var title = this.elements.title;
        var content = this.elements.content;

        var todo = new Todo(title.value, content.value);

        todo.save(function() {
          title.value = '';
          content.value = '';
        });

        event.preventDefault();
      }
    };
    this.newTodo.form.addEventListener('submit', this.newTodo.submit);
  }
  createTable() {
    Request('GET', '/database/todo/create_table', function(data) {
      console.log(data);
    });
  }

  dropTable() {
    Request('GET', '/database/todo/drop_table', function(data) {
      console.log(data);
    });
  }
}

class DatabaseApplication {
  constructor(container) {
    this.todo = null;

    this.container = document.querySelector(container);
    var createTodoTableButton = this.container.querySelector("button[action='create-todo-table']");
    var dropTodoTableButton = this.container.querySelector("button[action='drop-todo-table']");

    dropTodoTableButton.addEventListener('click', () => {
      this.todo.dropTable();
    });

    createTodoTableButton.addEventListener('click', () => {
      if (!this.todo) {
        return console.log('WHAT THE HELL IS HAPPENING');
      }
      this.todo.createTable();
    });
  }
};

var todo = new TodoApplication("#todo");

var database = new DatabaseApplication("#database");

database.todo = todo;

function Request(type, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.open(type, url, true);
  xhr.send(null);
}
