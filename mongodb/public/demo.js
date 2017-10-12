var displayInfo = function(message) {
  var xDemoInfo = document.body.querySelector("#demo-info");
  var xP = document.createElement('p');
  xP.innerText = message;

  xDemoInfo.appendChild(xP);
  xDemoInfo.scrollTop = xDemoInfo.scrollHeight;
};

function get(path) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      displayInfo(this.responseText);
    }
  };
  xhr.open('GET', path, true);
  xhr.send(null);
}
