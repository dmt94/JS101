/*
Write a function that takes one argument, an array of integers,
and returns the average of all the integers in the array,
[rounded down] to the integer component of the average.
The array will never be empty, and the numbers will always be positive integers.
*/

function average(arr) {
  return Math.floor((arr.reduce((acc, curr) => acc + curr)) / (arr.length));
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

/*
Other solutions:

///////
Glue method (still important concept)

function average(numbers) {
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }

  return Math.floor(sum / numbers.length);
}

///////
Creating arrow function first then calling

const total = (sum, num) => sum + num;

const average = arr => Math.floor(
  arr.reduce(total) / arr.length
);

*/