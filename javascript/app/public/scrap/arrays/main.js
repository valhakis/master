console.log('MAIN SCRIPT IS LOADED');

(function() {

  var fruits = ['Apple', 'Banana', 'Orange'];

  var len = fruits.length;

  var last = fruits[fruits.length - 1];

  fruits.forEach(function(item, index, array) {
    console.log(item, index, array);
  });

  // REMOVES LAST ITEM FROM ARRAY
  fruits.shift();
  console.log(fruits);

})();
