var form = document.querySelector('form');

form.onsubmit = function() {
  console.log('submitted');


  return false;
};

var upload = function(callback) {
  var elem = document.querySelector('#myBar');
  var width = 1;
  var id;

  var frame = function() {
    if (width >= 100) {
      clearInterval(id);
      callback();
    } else {
      width++;
      elem.style.width = width + '%';
    }
  };

  id = setInterval(frame, 10);
};

upload(function() {
  alert('UPLOAD HAS FINISHED');
});

/*
function move() {
  var elem = document.getElementById("myBar");   
  var myFunc01 = function() {
    var i = 1;
    while (i < 101) {
      (function(i) {
        setTimeout(function() {
          i++; 
          elem.style.width = i + '%';
          elem.innerHTML = i + '%';
        }, 600 * i)
      })(i++)
    }
  };
  myFunc01();
}

function finalize() {
  var elem = document.getElementById("myBar"); 
  var myFunc02 = function() {
    elem.innerHTML = 'Finalizing...';
  };
  setTimeout(myFunc02, 600);
}
*/
