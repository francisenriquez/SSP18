// Rewrite Functions
// We have two ways of writing a function. The function declaration is what we've used so far, and the function expression is new to us.
// Rewrite the following function declarations using a function expression:

// 1.
function cube(x) {
  return x * x * x;
}

var cubed = function(x){
  return x * x * x;
}
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

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// Finish the implementation of sumSquares below (using each):
function sumSquares(numbers) {
  var total = 0;
  each(numbers, function(n) {
  total += n * n
  });
  return total;
}
//Rewrite sumCubes using each:

function sumCubes(numbers) {
  var total = 0;
  each (numbers, function(x){
    total = total + cube(numbers[i]);
  })
  return total;
}
//Write a function called product that calculates the product of an array of numbers using a for loop; then, refactor it to use each.

function product(arr){
  var total = 0
  each (arr, function(x){
    total = total * x;
  })
  return total;
}

var product = function(x){
  var total = 0
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
    retArr.push(cube(x)[i])
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
console.log (numbers);

odds(numbers);

//-Summations-
//Write a function sumByAllElementsMultipliedByFour that takes an array as an argument and returns the sum of all elements multiplied by four.

function sumByAllElementsMultipliedByFour (arr){
  sumBy4 = 0;
  each (arr, function(x){
    sumBy4 = sumBy4 + x;
  })
  return sumBy4 * 4;
}

// Observe that sumByAllElementsMultipliedByFour is a terrible name for a function – you should also notice that
// sumByAllElementsMultipliedByFour looks a lot like sumCubes and sumSquares.

// Write a function sumBy that accepts two arguments: an array of numbers and a function. The function will be invoked upon each element
// in the array, and its result will be used to compute the sum.

function sumBy(numbers, f) {
  // ...
}

var numbers = [1, 2, 3, 4];

sumBy(numbers, square); // => 30
  //Note: you will have to create a function "square" that returns the square of an input number.
sumBy(numbers, cube); // => 100
  //Note: you will have to create a function "cube" that returns the cube of an input number.
sumBy(numbers, function(number) {
  return number * 4;
});
// => 40
// How can you use sumBy to compute the sum of an array of numbers (just the plain sum)?

// Write a function productBy that works like sumBy, but for products.


//new change