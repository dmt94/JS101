function cleanUp(string) {
  let nonChar = /\W/g;
  let realChar = /[a-zA-Z]/;
  let cleanString = '';
  if (nonChar.test(string)) {
    for (let i = 0; i < string.length; i++) {
      if ((nonChar).test(string[i]) && (realChar).test(string[i + 1])) {
        cleanString += ' ';
      } else if (!((realChar).test(string[i]))) {
        continue;
      } else cleanString += string[i];
    }
  }
  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));

//Clean Up 2

function cleanUpTwo(string) {
  let cleanString = '';
  if (/\W/.test(string)) {
    let newStr = string.replaceAll(/\W/g, ' ');
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === ' ' && newStr[i + 1] !== ' ') {
        cleanString += ' ';
      } else if (newStr[i] === ' ') {
        continue;
      } else cleanString += newStr[i];
    }
  }
  return cleanString;
}

console.log(cleanUpTwo("---what's my +*& line?"));

/*
Given a string that consists of some words and
an assortment of non-alphabetic characters,
write a function that returns that string with
all of the non-alphabetic characters replaced by spaces.
If one or more non-alphabetic characters occur in a row,
you should only have one space in the result
(i.e., the result string should never have consecutive spaces).

1. iterate over the string characters starting at real alphabet char
2. if the character before or after the current character is a
non-real alphabet,
push character as ' real character' or 'real character '

let i = indexOf(realChar)

let arr = [];

if (index before indexOf(realChar) or index after is non-real-char) {
  arr.push(char);
} else if (
  char[i] == non-real char, continue
) else arr.push(char);

return arr.join('')
*/

// function cleanUp(string) {
//   // let nonChar = /\W/g;
//   let cleanString = '';
//   if (/\W/.test(string)) {
//     let newStr = string.replaceAll(/\W/g, ' ');
//     for (let i = 0; i < newStr.length; i++) {
//       if (newStr[i] === ' ' && newStr[i + 1] !== ' ') {
//         cleanString += ' ';
//       } else if (newStr[i] === ' ') {
//         continue;
//       } else cleanString += newStr[i];
//     }
//   }
//   return cleanString;
// }

// console.log(cleanUp("---what's my +*& line?"));

// function cleanUp(string) {
//   let nonChar = /\W/g;
//   let realChar = /[a-zA-Z]/;
//   let cleanString = '';
//   if (nonChar.test(string)) {
//     for (let i = 0; i < string.length; i++) {
//       if ((nonChar).test(string[i]) && (realChar).test(string[i + 1])) {
//         cleanString += ' ';
//       } else if (!((realChar).test(string[i]))) {
//         continue;
//       } else cleanString += string[i];
//     }
//   }
//   return cleanString;
// }

