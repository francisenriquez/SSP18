// Rewrite Functions
// We have two ways of writing a function. The function declaration is what we've used so far, and the function expression is new to us.
// Rewrite the following function declarations using a function expression:

// 1.
function cube(x) {
  return x * x * x;
}

var cubed = function(x){
  return x * x * x;
};

// 2.
function fullname(first, last) {
  return first + " " + last;
}
var fullname = function(first, last){
  return first + " " + last;
}
// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
var power = function(base, exp){
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

var sumCubes = function(numbers){
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

console.log (sumCubes(200));

// Iterating Over Arrays Using each
// Write each as seen below in your main.js file.

var numbers = [1, 2, 3, 4]

function cube(x) {
  return x * x * x;
}

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// Finish the implementation of sumSquares below (using each):
function sumSquares(numbers) {
  var total = 0;
  each(numbers, function(n) {
  total += (n * n)
  });
  return total;
}
//Rewrite sumCubes using each:

function sumCubes(numbers) {
  var total = 0;
  each (numbers, function(x){
    total = total + cube(x);
  })
  return total;
}
//Write a function called product that calculates the product of an array of numbers using a for loop; then, refactor it to use each.


var product = function(arr){
  var total = 1;
  each (arr, function(x){
    total = total * x;
  })
  return total;
}

// Write a function called cubeAll that cubes each number in an array, and returns an array of all the numbers cubed using a for loop;
// then, refactor it to use each.

function cubeAll (arr){
  var retArr = [];
  each(arr, function(x){
    retArr.push(x * x * x);
  })
  return retArr;
}

// Write a function called odds that accepts an array as a parameter and returns an array of just the odd numbers.
// If you wrote it using each, great! If you used anything else, refactor it to use a for loop.

function odds(arr){
  oddArr = [];
  each (arr, function(x){
    if (x%2 !== 0){
      oddArr.push(x);
    }
  })
  return oddArr;
}
console.log ('numbers is :', numbers);

odds(numbers);
cubeAll(numbers);
product(numbers);
sumCubes(numbers);
sumSquares(numbers)
odds(numbers);

function sumAllElementsMultipliedByFour(arr){
  var sum = 0;
  each (arr, function(x){
    sum = sum + (x * 4);
  })
  return sum;
}

sumAllElementsMultipliedByFour(numbers);

function sumBy(arr, func){
  var sum = 0;

  each(arr, function(element) {
    sum = sum + func(element);
  });

  // for loop does the same thing as each() above  
  // for (var i = 0; i < arr.length; i++) {
  //   sum = sum + func(arr[i]);
  // }

  return sum;
}

function cube(x) {
  return x * x * x;
}
function square(x){
  return x * x;
}

////////////////////
// these two function calls are the same

sumBy(numbers, function(x){
  return x * x;
});

sumBy(numbers, square);

////////////////////

sumBy(numbers, cube);

sumBy(numbers, function(number) {
  return number * 4;
});

sumBy(numbers, function(number){
  return number * 1;
})

function productBy(arr, func){
  var product = 0;
  each(arr, function(value){
    product = product * value;
  })
  return product;
}

function doubled(x){
  return x + x;
}

function doubleAll (arr){
  var returnArray = []
  each(arr, function(value){
    returnArray.push(doubled(value));
  })
  return returnArray;
}

doubleAll(numbers);

function half(x){
  return x/2;
}

function halveAll(arr){
  var mapped = [];
  each(arr, function(number){
    mapped.push(half(number));
  });
  return mapped;
}

halveAll(numbers);

var words = ["him", "her", "they", "them"];




function uppercaseAll(arr){
  var mapped = [];
  each(arr, function(value){
    mapped.push(value.toUpperCase())
  })
  return mapped;
}

uppercaseAll(words);

//function changeElement(string)


function map(array, f){
  var mapped = [];
  each(array, function(element){
    mapped.push(f(element));
  });
  return mapped; 
}

uppercaseAll('him')



map(numbers, function(x){
  return 300 + x;
})

// function doubled(x){
//   return x + x;
// }


////////////////////
// these two function calls are the same

function cubeAll (arr){
  return map(arr, cube)
}

cubeAll(numbers);

map(numbers, num => num * 10);

// function cubeAll (arr){
//   var retArr = [];
//   each(arr, function(x){
//     retArr.push(cube(x));
//   });
//   return retArr;
// }

////////////////////