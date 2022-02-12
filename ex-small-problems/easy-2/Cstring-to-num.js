/*
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

function stringToInteger(string) {
  return +string;
}
/* Implicit type coercion 
unary plus operator is able to coerce numbers and 
decimals wrapped in string literal quotes '' or ""
*/
console.log(stringToInteger('3040002'));


/*
LS SOLUTION
_______________
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
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);  >>since they are string and able to extract the values
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
*/
