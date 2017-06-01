var max = 1000000;

var array = [ 
  { 
    typeId: 'random1', 
    catId: 'random2', 
    val: '2' 
  }, 
  { 
    typeId: 'random1', 
    catId: 'random2', 
    val: '2' 
  }, 
  { 
    typeId: 'random1', 
    catId: 'random2', 
    val: '2' 
  }, 
  { 
    typeId: 'random1', 
    catId: 'random2', 
    val: '2' 
  }, 
  { 
    typeId: 'random2', 
    catId: 'random2', 
    val: '3' 
  }, 
  { 
    typeId: 'random1', 
    catId: 'random2', 
    val: '1' 
  } ,
  { 
    typeId: 'random2', 
    catId: 'random2', 
    val: '5' 
  } 
];

/*
Print(array);

var x = 5;
console.log(--x);

for (var i=0; i<array.length; i++) {
  console.log(`i:${i}`, JSON.stringify(array[i], ' ', 2));
  for (var j=i+1; j<array.length; j++) {
    if (array[i].typeId == array[j].typeId && array[i].catId == array[j].catId) {
      array[i].val = parseInt(array[i].val) + parseInt(array[j].val);
      array.splice(j--, 1);
    }
    console.log(`j:${j}`, JSON.stringify(array[i], ' ', 2));
  }
  //console.log("BREAK");
  /*
  if (array[i].typeId == array[i+1].typeId && array[i].catId == array[i+1].catId) {
    array[i].val = parseInt(array[i].val) + parseInt(array[i+1].val);
    array.splice(i+1, 1);
    i--;
  }
}
  */

//Print(array);

//function Print(array) {
  //var xPre = document.createElement('pre');
  //xPre.innerText = JSON.stringify(array, ' ', 2);

  //document.body.appendChild(xPre);
//}

var start = new Date();

for (var x=0; x<max; x++) {

  for (var i=0; i<array.length; i++) {
    for (var j=i+1; j<array.length; j++) {
      if (array[i].typeId == array[j].typeId && array[i].catId == array[j].catId) {
        array[i].val = parseInt(array[i].val) + parseInt(array[j].val);
        array.splice(j, 1);
        j--;
      }
    }
  }

}

var end = new Date();

console.log(end.getMilliseconds()-start.getMilliseconds());


function fun1() {
  var groups = array.reduce(function(acc, obj) {
    acc[obj.typeId+'_'+obj.catId] = acc[obj.typeId+'_'+obj.catId] || 0;
    acc[obj.typeId+'_'+obj.catId] += +obj.val;
    return acc;
  }, {});


  var result = Object.keys(groups).map(function(key) {
    return {
      typeId: key.split('_')[0],
      catId: key.split('_')[1],
      val : groups[key]
    };
  });
}

function fun2() {
  var result = [];
  array.forEach(function(e) {
    var key = e.typeId + '|' + e.catId;
    if(!this[key]) this[key] = e, result.push(this[key]);
    else this[key].val = +this[key].val + +e.val;
  }, {});
}

for (var x=0; x<max; x++) {
  start = new Date();
  fun1();
  end = new Date();
  console.log(end.getMilliseconds()-start.getMilliseconds());
}

for (var x=0; x<max; x++) {
  start = new Date();
  fun2();
  end = new Date();
  console.log(end.getMilliseconds()-start.getMilliseconds());
}

// console.log(result);


