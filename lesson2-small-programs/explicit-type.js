//converting strings to Num (unexpected behaviors)
console.log(Number('')); //converting an empty string => number : 0, same with empty array

/*
Can we convert objects, arrays, booleans, undefined or null to numbers?
*/

console.log(Number({}));           //NaN (empty object)

console.log(Number([]));           //0 (empty array)

console.log(Number([4]));          //4 (array with a single element, number 4), also works with string '4'

console.log(Number([undefined]));  //0 (array with single element, undefined)

console.log(Number([null]));      //0 (array with single element, null)

console.log(Number([1, 2, 3]));   //NaN (array with multiple elements, numbers)

console.log(Number(undefined));   //NaN (undefined)

console.log(Number(null));        //0 (null)

console.log(Number(true));        //1 

console.log(Number(false));       //0

/*
parseInt and parseFloat

parseInt(): converts STRINGS to INTEGERS 
  => takes a string as an argument and tries to parse an 
    INTEGER number from it

  => parseInt() returns an INTEGER and ignores the 
    FRACTIONAL part if string contains 
    floating point number

  => parseInt() converts strings to numbers even when 
  the string contains non-numeric characters
  AS LONG AS THE STRING BEGINS WITH A DIGIT --optionally preceded by + or -
  pareInt() returns a number

parseFloat(): converts STRINGS to FLOATING POINT NUMBERS
  => 
*/

console.log(parseInt('12.52'));   // 12
console.log(parseInt('-12.52'));  // -12
console.log(parseInt('+12.52'));  // 12
console.log(parseInt('12oz'));    // 12
console.log(Number('12oz'));      // NaN

/*
parseInt() accepts a second argument called the radix 
(specifies the base of the # contained in the string)
*/

console.log(parseInt('10101', 2)); // 21

/*
toString method
*/

let num = 42;
let und = undefined;
let nu = null;
console.log(num.toString());
// console.log(und.toString()); - TypeError: Cannot read properties of undefined 
// console.log(nu.toString()); - TypeError: Cannot read properties of null 

