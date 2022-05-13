/*
Given an unordered array and the
information that exactly one value in the array occurs twice
(every other value occurs exactly once),
determine which value occurs twice. Write a function that will find
and return the duplicate value that is in the array.
*/

function findDup(arr) {
  const toFindDuplicates =
  arr => arr.filter((item, index) => arr.indexOf(item) !== index);
  /*
  this indicates a duplicate

  In this method, what we do is that we compare the
  index of all the items of an array with the
  index of the first time that number occurs
  */
  const duplicateElements = toFindDuplicates(arr);
  console.log(duplicateElements);

// Output: [1, 3]
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

/*
Using Set method returns only unique elements
If the array has duplicate values, then they will be removed by the Set.
This means that the Set will only contain unique array elements.
Note that the original array will not be modified.
*/