function request(btn, path) {
  btn.style.color = '#F00';
  btn.disabled = true;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      btn.style.color = '#000';
      btn.disabled = false;
      console.log(this.responseText);
    }
  };
  xhr.open('GET', path, true);
  xhr.send(null);
}
