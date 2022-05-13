/*
Write a function that takes two array arguments,
each containing a list of numbers, and returns a new array
containing the products of all combinations of number pairs
that exist between the two arrays.

The returned array should be sorted in
ascending numerical order.
*/

function multiplyAllPairs(arrOne, arrTwo) {
  let product = [];

  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      product.push(arrOne[i] * arrTwo[j]);
    }
  }
  console.log(product.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]