/*
Write a function that takes a string,
doubles every character in the string,
and returns the result as a new string.

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

function repeater(string) {
  let str = '';
  for (let char of string) {
    str += char + char.repeat(char.length);
  }
  console.log(str);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""


//Better way
function repeater2(string) {
  return (string.split('').map(char => char + char.repeat(char.length))).join('');
}

console.log(repeater2('Hello'));        // "HHeelllloo"
console.log(repeater2('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater2(''));             // ""

//regex solution

const repeater3 = (str) => str.replace(/./g, '$&$&');