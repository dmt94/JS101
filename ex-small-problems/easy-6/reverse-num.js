/*
Regex with String.replace() method

var strNumber = "0049";
console.log(typeof strNumber); //string

var number  = strNumber.replace(/^0+/, '');

console.log(typeof number); //number
console.log(number); //49

^0 character enables to match the zero at
the beginning of the string and replace it with an empty string.

The Problem:

- Write a function that takes a positive integer as
an argument and returns that number with its digits reversed.

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
-- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

*/

function reverseNumber(num) {
  let numStr = String(num);
  return parseInt(numStr.split('').reverse().join(''), 10);
}

/*
Notice the radix of 10 as a second argument to parseInt.
This gives the parseInt function the base by which it
parses the number. If the number string contains leading zeroes
(e.g., '00021'), parseInt may convert the number to 17 (base 8)
instead of 21 (base 10); the behavior varies based on the
version of JavaScript.
*/

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));