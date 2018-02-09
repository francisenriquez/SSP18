function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function indexedExponentials(arr){
  var mapped = [];
  each(arr, function(value, i){
    mapped.push(Math.pow(value, i));
  })
  return mapped;
}

indexedExponentials([2, 5, 7, 4]);

function evenIndexedOddNumbers(arr){
  var filtered = [];
  each(arr, function(value, i){
    if(value.length %2 !==0 && i%2===0){
      filtered.push(value);
    }
  })
  return filtered;
}

function evenIndexedEvenLengths(arr){
  var filtered = [];
  each(arr, function(value, i){
    if(value.length%2===0 && i%2===0){
      filtered.push(value);
    }
  })
  return filtered;
}

evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]);
evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);

/////////////Each Objects/////////////////

var francis ={
  age : 33,
  hair : 'black',
  eyes : 'brown',
  shoeSize : 11
}

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function values(obj){
  var mapped = []
  each(obj, function(value, i){
    mapped.push(value);
  })
  return mapped;
}

values(francis);

function keys(obj){
  var mapped = [];
  each(obj, function(value, key){
    mapped.push(key);
  })
  return mapped;
}

keys(francis);

function keysLongerThan(obj, num){
  var filtered = {};

  each(obj, function(value, key){
    if(key.length > num){
      filtered[key] = value;
    }
  })
  return filtered;
}

keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
