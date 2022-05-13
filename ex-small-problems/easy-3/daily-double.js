/* Write a function that takes a string argument and 
returns a new string that contains the value 
of the original string with all 
consecutive duplicate characters 
collapsed into a single character.

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

function crunch(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i-1]) {
      continue;
    } else newString += string[i];
  }
  return newString;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
