/*
Write a function that returns the [next to last word] 
in the String passed to it as an argument.
Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

function penultimate(sentence) {
  let word = sentence.split(' ');
  return word[word.length - 2];
}

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great!") === "is"); // logs true