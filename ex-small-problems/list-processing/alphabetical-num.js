/*
Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19
*/

// let alphToNum = {
// zero: 0,
// one: 1,
// two: 2,
// three: 3,
// four: 4,
// five: 5,
// six: 6,
// seven: 7,
// eight: 8,
// nine: 9,
// ten: 10,
// eleven: 11,
// twelve: 12,
// thirteen: 13,
// fourteen: 14,
// fifteen: 15,
// sixteen: 16,
// seventeen: 17,
// eighteen: 18,
// nineteen: 19,
// };


const alphabets = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

//least to greatest
function alphabeticNumerSort(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[alphabets[i]] = arr[i];
  }
  let keyValPairs = Object.entries(obj);
  return keyValPairs.sort().map(pair => pair[1]);
}

console.log(alphabeticNumerSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19]));


/* other solutions

function alphabeticNumberSort(arr) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

Note: numbers are technically also the same as the index values of the
alphabetical numbers in NUMBER_WORDS

  return arr.map(element => NUMBER_WORDS[element]).sort()
  .map(element => NUMBER_WORDS.indexOf(element));
}
*/
