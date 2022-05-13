/*
Write a function that takes one argument,
a positive integer, and returns the sum of its digits.
Do this without using for, while, or do...while loops - instead,
use a series of method calls to perform the sum.
*/

function sum(num) {
  let numStr = String(num).split('');
  return numStr.reduce((prev, curr) => Number(prev) + Number(curr));
}


console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));

/*
Cleaner Way

function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}
*/