/*
Write a function that returns true if the string passed
as an argument is a palindrome, or false otherwise.
A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/

function isPalindrome(string) {
  let strCopy = string.slice().split('').reverse().join('');
  return strCopy === string;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('madam i\'m adam'));
console.log(isPalindrome('356653'));