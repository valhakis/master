var hasObject = function(arr) {
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] == 'object') {
      return true;
    }
  }
  return false;
};

console.log(hasObject(['a','b','c']));
console.log(hasObject([{ id: 1}, {id: 2}]));
console.log(hasObject([{id: 1}, {id:2}, 'a', 'b']));
