/*
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements
from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty,
and that they have the same number of elements.
*/

function interleave(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return arr3;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

/*
LS Shorter Way:
*/

function interleave2(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    //can use push method with 2 arguments
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}