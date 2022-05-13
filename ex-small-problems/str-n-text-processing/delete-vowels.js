/*
Write a function that takes an array
of strings and returns an array of the same string values,
but with all vowels (a, e, i, o, u) removed.*/

function removeVowels(array) {
  let consOnly = word => word.split('').filter(char => !(/[aeiouyAEIOUY]/).test(char)).join('');
  return array.map(consOnly);
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


/* Launch School Better Method

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}
*/

