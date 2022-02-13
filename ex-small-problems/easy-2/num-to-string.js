
// let number = 3258;

// function find(num) {
//   console.log(num / 10); //returns decimal left to the the (ones place)
//   console.log(num % 10); //returns the furthest to the right (ones place)
// }

// find(number);

function integerToString(int) {
  let finalNum = [];
  if (int === 0) {
    return '0';
  }
  while (int > 0) {
    finalNum.push(int % 10);     //keeps pushing the digit in the ones place 
    int = Math.trunc(int / 10);  //keeps truncating the digit down so there is a new digit in the ones place
  }
  return finalNum.reverse().join('');
}

console.log(integerToString(4321));
console.log(integerToString(2500));
console.log(integerToString(5000));
console.log(integerToString(0));


/*
LS SOLUTION 
______________________
*/


const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString2(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(integerToString2(0));