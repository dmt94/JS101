/*
Given a string of words separated by spaces, write a function that
swaps the first and last letters of every word.

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

FIRST WAY

function swap(string) {
  let strA = string.split(' ');
  const newArr = strA.map(function(word) {
    let wordTwo = word.slice();
    wordTwo = word.replace(word[word.length - 1], word[0]);
    wordTwo = wordTwo.replace(word[0], word[word.length - 1]);
    return wordTwo;
  }
  );
  return newArr.join(' ');
}//end of function
*/

function swap(string) {
  let strA = string.split(' ');
  const newArr = strA.map(function(word) {
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }
  );
  if (string.length <= 1) return string;
  return newArr.join(' ');
}//end of function

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/* Launch School Solution

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
*/

/////Another great shorter solution ////
/*
REVERSES THE CHARACTERS IN EACH WORD IN THE MAP FUNCTION,
which works
const reversChar = word => word.split('').reverse().join('');

//functions can take in other functions!!!

function swap(text) {
  return text.split(' ').map(reversChar).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
*/

