var fun = {};

fun.loadSource = function(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  xhr.open('GET', `/apps/typing/${path}`, true);
  xhr.send(null);
};

fun.activate = function(event) {
  var active = document.querySelector('.active');
  active.classList.remove('active');
  this.classList.add('active');
};
