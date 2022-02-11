/*
Write a function that takes [one integer argument], 
which may be [positive], [negative], or [zero]. 
This method returns true if the number's absolute value is [odd]. 
You may assume that the argument is a valid integer value. */

//MY SOLUTION
function isOdd(number) {
  if (number > 0 && number % 2 !== 0) {
    return true;
  }
  else if (number <= 0 && number % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//________________________________________________________________________________________________________
//LS SOLUTION

// function isOdd(number) {
//   return Math.abs(number) % 2 === 1;
// }

