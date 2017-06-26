function largest(arr) {
  var array = [];

  for (var i=0; i<arr.length; i++)
  {
    console.log(arr[i].join());
    // console.log(Math.max(arr[i].join()));
    array.push(Math.max.apply(null, arr[i]));
  }

  return array;
}

var array = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
];

var result = largest(array);
console.log(result);
