
$.get('sample', function(data) {
  console.log(data);
});

console.log('WAHT IS HAPPENING');

/* 1 */
var a = 'sample text';

function one() {
  a = 'modified text';
}

function two() {
  console.log(a);
}

one();
two();

/* 2 */
function one(callback) {
  var a = 'sample text callback';
  callback(a);
}

function two() {
  one(function(a) {
    console.log(a);
  });
}
two();

/* 3 */

var one = new Promise(function(resolve, reject) {
  var a = 'sample text promise';
  resolve(a);
});

function two() {
  one.then(function(a) {
    console.log(a);
  });
}

two();

/* 4 */
var myGlobals = {};

function one() {
  myGlobals.a = 'sample text';
}

function two() {
  console.log(myGlobals.a);
}
