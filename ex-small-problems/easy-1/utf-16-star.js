/*



____________________________________________________
UTF-16 STRING VALUE

Write a function that determines and returns the UTF-16 
string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values 
of every character in the string. 

(You may use String.prototype.charCodeAt() 
to determine the UTF-16 value of a character.)

*/

function utf16Value(string) {
  let utfA = [];
  for (let i = 0; i < string.length; i++) {
    let utfChar = string.charCodeAt(i); 
    utfA.push(utfChar);
  }
  let sum = utfA.reduce((accumulator, element) => {
    return accumulator + element}, 0);
  return sum;
}

console.log(utf16Value('happiness'));
console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";  
/*
code works with non-ASCII characters from the UTF-16 character set.
*/
console.log(OMEGA);             // Ω
console.log(utf16Value(OMEGA)); // 937

/*
LS SOLUTION
___________ LOVE THEIR SOLUTIONS! */ 
function utf16Value2(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx); 
  }

  return sum;
}

function utf16Value3(str){
  return [...str].reduce((acc, element) => acc + element.charCodeAt(0), 0);
}

//VERY CLEVER!
const utf16Value4 = string => string.split('').reduce((total, elem) => total + elem.charCodeAt(), 0);
/*
introduces a new concept of "gluing" things += to a declared variable 
value of that declared variable can be "anything"
alternative to pushing to an array
*/
