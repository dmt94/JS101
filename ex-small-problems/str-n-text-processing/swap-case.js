/*
Write a function that takes a string as an argument
and returns that string with every lowercase letter
changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.
*/

function swapCase(string) {
  return (string.split('').map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() :
      char.toUpperCase();
  })).join('');
}

console.log(swapCase('CamelCase12'));
console.log(swapCase('Tonight on XYZ-TV'));