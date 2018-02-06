// Debug each: You are given this function each, but it doesn't work exactly as expected. It should call callback on value, key, and collection respectively for each element of collection, and accept both arrays and objects. Identify everything incorrect with each as it is provided (explain in your recording), and modify the function so that it works as expected. Be sure to list all that was incorrect about the original function.

var each = function(value, index, collection) {
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
      return value;
    }
  } else {
    for (var key in collection) {
    return collection[key];
    }
  }
};

/*
Issues with 'each'
1) wrong method used to find out if collection is and Array or Not
2) Missing return statement for Arrary
3) Line 6 callback after for loop was no declared
4) Missing return statement for else
5) if should return each value of collection array
6) else should return key in object in collection array
etc.. <add more numbers as needed>
*/


//Part 2

// Write a function addRandomAgeInclusive that takes in a name string, or an object with a name property, and two numbers. This function should generate a random number within the range of the two input numbers, and return an object with an added age property along with the randomly generated number.

// Edge cases to consider:

// If input object does not have a name property, return original object.
// If 2nd input is larger than 3rd input, return original first argument.
// Example:

addRandomAgeInclusive('Mayor', 20, 25); // { name: 'Mayor', age: 25 }
addRandomAgeInclusive({ name: 'Sean', id: 10330293 }, 30, 40); // { name: 'Sean', id: 10330293, age: 39 }
addRandomAgeInclusive({ firstName: 'Trish' }, 30, 40); // { firstName: 'Trish' }
addRandomAgeInclusive('Kai', 20, 18); // 'Kai'

// function getRandomNum(num1, num2) {
//   return Math.random() * (num2 - num1) + num1;
// }
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addRandomAgeInclusive(name, num1, num2){
  var retObj = {};
  //if name is a string, transform into an object and return with random number between num1 and num2
  if (num2 > num1){
    if (typeof name === "string"){
    age = getRandomInt(num1, num2)
    name = {name, age}
    return name;
  }
  //Mat.random to gett random number
  //if name is an object with no name property return original object'
    else if (name.hasOwnProperty('name') === false){
        return name;
    }else{
      return name;
    }
  }else{
    return name;
  }
}

//addRandomAgeInclusive ({name:Francis}, 10, 20);


//Part3
// Write a function assignGroup that takes a name string or an object, and returns an object with an added group property. A student must be randomly placed in group 'A', 'B', 'C', or 'D'.

function assignGroup (name){
  var retObj = {};
  if (typeof name === 'string'){
    name = {}
  }
  return retObj;
}
