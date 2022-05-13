/*
Sum of Sums
Write a function that takes an array of numbers
and returns the sum of the sums of each leading
subsequence in that array.

Examine the examples to see what we mean. You may assume that
the array always contains at least one number.
*/

function sumOfSums(arr) {
  let newArr = [];
  let newSum = 0;
  arr.forEach(num => newArr.push(newSum = (newSum += num)));
  return newArr.reduce((prev, curr) => prev + curr);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

//cleaner method

function sumOfSums2(arr) {
  let newSum = 0;
  return arr.map(num => newSum += num).reduce((acc,prev) => acc + prev, 0);
}

console.log(sumOfSums2([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums2([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums2([4]));              // 4
console.log(sumOfSums2([1, 2, 3, 4, 5]));  // 35