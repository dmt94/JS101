/*
Palindromic Substrings

- find all substrings
- palindrome function for array
*/

function leadingSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.substring(0, i + 1));
  }
  return arr;
}

function substrings(string) {
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    newStr.push(leadingSubstrings(string.slice(i)));
  }
  return newStr.flat();
}

function isPalindrome(word) {
  let wordReversed = word.slice().split('').reverse().join('');
  return word.length > 1 && wordReversed === word;
}

function palindromes(string) {
  let allSubstrings = substrings(string);
  return allSubstrings.filter(isPalindrome); //filter accepts true or false
}

console.log(palindromes('madam'));