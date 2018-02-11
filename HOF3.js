var numbers = [-6, -9, 10, 15, 20, 21, 23, 40, 50, -100];

var smallNums = [2, 4, 2];

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function reduce(array, f, start) {
  var acc = start;
  
  each(array, function(element) {
    acc = f(acc, element);  // acc = -15       element = 10
   });
  return acc;
}

function sum(numbers) {
  return reduce(numbers, function(prev, next) {
    return prev + next;
  }, 0);
}

sum(numbers);

function product(numbers) {
  return reduce(numbers, function(total, number) {
    return total * number;
  }, 1);
}

product(smallNums);

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 20},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 40},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 60},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 80},
  {name: {first: "Louis", last: "Reasoner"}, age: 50}
];

function averageAge(people) {
  return reduce(people, function(prev, curr) {
    return prev + curr.age;
  }, 0) / people.length;
  // First you'll need to compute the sum of all the ages
  // Second, divide the sum by the number of people (people.length)

  // YOUR CODE HERE
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);  // acc = -15       element = 10
   });
  return acc;
}

averageAge(people);


function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}


function factorial(num) {
  return reduce(range(1, num + 1), function(prev, curr) {
    return prev * curr;
  }, 1);
  
  // factorial is the product of all numbers from 1 to `num`
  // range creates an array of start-end
  // factorial(6) // 1 * 2 * 3 * 4 * 5 * 6
  
  
}

factorial(4);
