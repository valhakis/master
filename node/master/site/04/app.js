// javascript or lodash method to combine collection of object.
document.body.innerHTML = '<span></span>';

var array = [
  {
    typeId: 'random1',
    catId: 'random2',
    val: '2'
  },
  {
    typeId: 'random1',
    catId: 'random2',
    val: '3'
  },
  {
    typeId: 'random1',
    catId: 'random4',
    val: '1'
  },
  {
    typeId: 'random1',
    catId: 'random4',
    val: '9'
  },
  {
    typeId: 'random8',
    catId: 'random4',
    val: '15'
  },
  {
    typeId: 'random3',
    catId: 'random4',
    val: '99'
  }
];

Print(array);


for (var i=0; i<array.length - 1; i++) {
  if (array[i].typeId == array[i+1].typeId && array[i].catId == array[i+1].catId) {
    array[i].val = parseInt(array[i].val) + parseInt(array[i+1].val);
    array.splice(i+1, 1);
    i--;
  }
}

Print(array);

function Print(array) {
  var xPre = document.createElement('pre');
  xPre.style.display = 'inline-block';
  xPre.innerText = JSON.stringify(array, ' ', 4);
  document.body.appendChild(xPre);
}

// array[0] == array[1]
// array[0] == array[2]

/*
var newArray = [];
for (var i=0; i<array.length; i++)
{
  console.log(`i: ${i}`, array[i]);
  for (var j=i; j<array.length; j++)
  {
    //console.log(`i: ${i}, j: ${j}`, array[i]);
  }
}
*/
