/*
Write a function that takes two array arguments,
each containing a list of numbers, and returns a
new array that contains the product of each pair of
numbers from the arguments that have the same index.
You may assume that the arguments contain the same number of elements.
*/

function multiplyList(arrOne, arrTwo) {
  let arrThree = [];
  for (let i = 0; i < arrOne.length; i++) {
    arrThree.push(arrOne[i] * arrTwo[i]);
  }
  console.log(arrThree);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

/* More efficient */

function multiplyListTwo(arr1, arr2) {
  return arr1.map((elm, idx) => elm * arr2[idx]);
  // map iterates through every element and using index on
  // the other array will put them both on the same level
}

