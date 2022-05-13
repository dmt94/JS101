/* 
Write a function that will take a short line of text, 
and write it to the console log within a box.

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Further Exploration CHALLENGE

Modify this function so that it truncates the message if it doesn't 
fit inside a maximum width provided as a second argument 
(the width is the width of the box itself). 
You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, 
try word wrapping messages that are too long to fit, 
so that they appear on multiple lines but are still contained within the box. 
This isn't an easy problem, but it's doable with basic JavaScript.
*/

let word = 'To boldly go where no one has gone before.';

function logInBox(string) {
  let stringPaddingLength = string.length + 2;
  let topBottomRow = `+${'-'.repeat(stringPaddingLength)}+`; 
  let emptyRow = `\n|${` `.repeat(stringPaddingLength)}|`;
  let stringRow = `\n| ${string} |`;
  
  return topBottomRow + emptyRow + stringRow + emptyRow + `\n` + topBottomRow;
}

console.log(logInBox(word));