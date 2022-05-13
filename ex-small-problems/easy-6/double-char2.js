/*
Write a function that takes a string,
doubles every consonant character in the string,
and returns the result as a new string.

The function should not double:
- vowels ('a','e','i','o','u'),
  > /[aeiou]/
- digits,
  > \d
- punctuation,
  > \W
= whitespace
  > \s
*/

function doubleConsonants(str) {
  let newStr = '';
  for (let char of str) {
    if ((/\d+/g.test(char)) || (/[aeiou]/.test(char)) ||
    (/\W+/g.test(char)) || (/\s+/g.test(char))) {
      newStr += char;
    } else {
      newStr += char + char.repeat(char.length);
    }
  }
  return newStr;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));

/* Shorter Way */

function doubleConsonants2(str) {
  return str.split('').map(char => ((!'aeiou'.includes(char)) && char.match(/[a-z]/i)) ? char + char : char).join('');
}