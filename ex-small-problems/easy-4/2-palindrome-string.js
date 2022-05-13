/*
Write another function that returns true if
the string passed as an argument is a palindrome, or false otherwise.
This time, however, your function should be case-insensitive,
and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the
isPalindrome function you wrote in the previous exercise.
*/

function isRealPalindrome(string) {
  let str = string.replace(/\W+/g, '').toLowerCase().split('').join('');
  let strNew = string.replace(/\W+/g, '').toLowerCase().split('').reverse().join('');
  return str === strNew;
}

console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome("356a653"));
console.log(isRealPalindrome("madam"));
console.log(isRealPalindrome("123ab321"));


