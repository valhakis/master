(function() {
  var container = document.querySelector('#files-container');
  var url = '/static';

  var Files = {};

  Files.getAllFiles = function(callback)
  {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
      if (xhr.readyState == 4 && xhr.status == 200)
      {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      }
    }
    xhr.open('GET', url + '/api/files', true);
    xhr.send(null);
  }

  Files.getAllFiles(function(data) {
    createStructure(data.files, container);

    // create paths list
    var ul = document.createElement('ul');
    // container.appendChild(ul);
    for (var x=0; x<data.paths.length; x++) {
      var li = document.createElement('li');
      li.innerText = data.paths[x];
      ul.appendChild(li);
    }
  });

  function dirToggle()
  {
    this.nextSibling.classList.toggle('hidden');
  }

  function createStructure(files, container) {
    var ul = document.createElement('ul');
    container.appendChild(ul);

    for (var x=0; x<files.length; x++) {
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.innerText = files[x].name;
      li.appendChild(span);
      ul.appendChild(li);
      if (files[x].isDir) {
        span.classList.add('dir');
        span.addEventListener('click', dirToggle);
        createStructure(files[x].files, li);
        span.nextSibling.classList.add('hidden');
      } else {
        span.classList.add('file');
      }
    }
  }

})();
