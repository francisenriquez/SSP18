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

//Write a function called keysLongerThan that accepts two parameters -- an object and a number -- and returns a new object with only the key/value pairs in the input object whose keys are longer than the numeric argument, e.g.:

function keysLongerThan(obj, num) {
  var longerThanNum = {};
  each(obj, function(value, key) {
    if (key.length > num) {
      longerThanNum[key] = value
    }
  });
  return longerThanNum
}

keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);

function incrementValues(obj){
  var mapped = {};
  each(obj, function(value, key){
    if(typeof value === "number"){
      mapped[key] = value + 1;
    }else{
      mapped[key] = value;
    }
  })
  return mapped;
}


var input = {
  age: 33,
  name: 'Francis',
  currentYear: 2019,
  married: true
};

incrementValues(input);

/////////////FILTER///////////////

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

function evens(arr){
  return filter(arr, function(value){
    if (value%2 === 0){
      return true;
    }else{
    return false;
    }
  })
}

var numbers = [-6, -9, 10, 15, 20, 21, 23, 40, 50, -100];

console.log(numbers);
evens(numbers);

function multiplesOfThree(arr) {
  return filter
}

function positives(arr){
  return filter(arr, function(value){
    if (value >0){
      return true;
    }else{
      return false;
    }
  })
}

positives(numbers);

words = ["Black", "Blue", "Orange", "red", "purple", "Gray", "Green"]

function evenLength(arr){
 return filter(arr, function(value){
    if  (value.length%2 === 0){
      return true;
    }else{
      return false
    }
  })
}

evenLength(words); 

///////More Practice///////

function odds(arr){
  return filter(arr, function(value){
    if (value %2 !== 0){
      return true;
    }else{
      return false;
    }
  })  
}

odds(numbers);

function negatives(arr){
  return filter(arr, function(value){
    if (value < 0){
      return true;
    }else{
      return false;
    }
  })
}

negatives(numbers);

function largerThanSix(arr){
  return filter(arr, function(value){
    if (value > 6){
      return true;
    }else{
      return false;
    }
  })
}

largerThanSix(numbers);


function startsWithChar(arr, character){
  return filter(arr, function(value){
    if (value.charAt(0) === character){
      return true;
    }else{
      return false;
    }  
  })
}

startsWithChar(words, "p");

var moreWords = "the quick brown fox jumps over the lazy dog".split(" ");

startsWithChar(moreWords, "q");
startsWithChar(moreWords, "t");

function filterExtended(array, predicate) {
  var acc = [];
  each(array, function(element, index) {
    if (predicate(element, index)) {
      acc.push(element);
    }
  });
  return acc;
}

function evenIndexedEvenLengths(arr){
  return filterExtended(arr, function(value, index){
    if (index%2 === 0 && value.length%2 ===0){
      return true;
    }else{
      return false;
    }
  })
}

console.log (words);
evenIndexedEvenLengths(words);

evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);

evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);



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

function arrayObjectFilter(arrObj, fn) {
  var mappedArray = [];
  var filteredObj = {};
  if (Array.isArray(arrObj)){
    each (arrObj, function(value, i){
      if (fn(value, i)){
        mappedArray.push(value);
      }
    })
    return mappedArray;
  }else{
    for (var key in arrObj){
      // TODO
      filteredObj[key] = arrObj[key];
    }
  }
  return filteredObj;
})

function onlyNumeric(arrObj, function(value){
  return arrayObjectFilter(arrObj, function(value){
    if (typeof value === "number"){
      return true;
    }else{
      return false;
    }
  })  
})

arrayObjectFilter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
});
