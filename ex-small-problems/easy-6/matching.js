/*

Write a function that takes a string as an argument
and returns true if all parentheses in the string are properly balanced,
false otherwise. To be properly balanced,
parentheses must occur in matching '(' and ')' pairs.

*/

let pairs = {
  '(': ')',
  ')': '(',
  '[': ']',
  '{': '}',
  '"': '"',
  "'": "'"
};
function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

console.log(isBalanced("What [is] this?") === true);

//Further Exploration

function isBalanced2(string) {
  let possibleCharsToBalance = ['(', ')', '[', ']', '{', '}', '"', "''"];  // Matching for ' might not be the best idea
  let possiblePairs = ['()', '[]', '{}', '""', "''"];
  let remaining = string.split('').filter(char => possibleCharsToBalance.includes(char)).join('');

  let len;
  do {
    len = remaining.length;
    possiblePairs.forEach(pair => remaining = remaining.split(pair).join(''));
  } while (remaining.length < len);

  return remaining.length === 0;
}