/*
CHALLENGE! 

The parseInt() method converts a string of numeric characters 
(including an optional plus or minus sign) to an integer. 

The method takes 2 arguments where the first argument 
is the string we want to convert and the second argument 
should always be 10 for our purposes

Write a function that takes a string of digits and 
returns the appropriate number as an integer. 
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, 
nor should you worry about invalid characters; 
assume all characters will be numeric.

You may not use any of the standard conversion methods 
available in JavaScript, such as String() and Number(). 

Your function should do this the old-fashioned way 
and calculate the result by analyzing 
the characters in the string.
*/

function strToInt(string) {
  return +string;
}
/* Implicit type coercion 
unary plus operator is able to coerce numbers and 
decimals wrapped in string literal quotes '' or ""
*/
console.log(strToInt('3040002'));


/*
LS SOLUTION
_______________
*/
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);  //since they are string and able to extract the values
  //use digits stored as strings to look up the corresponding numeric values.

  //map returns a new array
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit)); //arrayOfDigits is an array of numbers-- the value extracted from DIGITS object
  return value; //somehow the value became changed 
}

console.log(stringToInteger('431'));

/*
DISSECTING: LS EXPLANATION

An object's keys are strings, but the values can be any type,
including other objects.

ways to call an object's values (in this case, the values are numbers):
DIGITS['name of key']; (keys are strings)

in the original problem, input is a string and we are trying to convert 
string -> number
*/

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

let keyOfDigit = Object.keys(DIGITS); // Object.keys returns [keys] as an [array]
//because Object.keys() returns an array-- you can iterate over it and use array methods on it
console.log(keyOfDigit);
console.log(keyOfDigit[0]);
// console.log(typeof keyOfDigit[0]);    // string, Object keys are strings


// TRANSFORMING ARRAYS WITH MAP
/*
Suppose you want to create a [new array] whose [values] 
depend on the [original contents] of the array. 

array.map(element => element);

                             [array].map(char => DIGITS[char]);
let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  >>> for each 'char' (original string input has been split into its consecutive characters,
      each character is an element in this array)
      these 'char' are 'strings' AND IS USED here to call the values for the object DIGITS
      DIGITS[char] (each char being replaced by each char in the string.split(""))
      would map the values of the object


// .forEach > can perform simple iteration and returns [undefined]
map transforms an array's elements and returns a new array with the transformed values.
*/

/*
NEW SOLUTION
*/
function strToInt2(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);  //since they are string and able to extract the values
  //use digits stored as strings to look up the corresponding numeric values.

  //.join will return a string 
  let combine = arrayOfDigits.reduce((prev, current) => {return (prev * 10) + current}, 0);
  return combine
}

console.log(strToInt2('431'));
console.log(strToInt2('43'));
