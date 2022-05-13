/*
Write a function that takes an array as an argument and returns
an array that contains two elements, each of which is an array.
Put the first half of the original array elements
in the first element of the return value, and
put the second half in the second element.

If the original array contains an odd number of elements,
place the middle element in the first half array.

return value is a nested array that splits the array argument
into two arrays
*/

function halvsies(arr1) {
  let newA = [];
  if (arr1.length % 2 === 0) {
    newA.push((arr1.slice(0, arr1.length / 2)));
    newA.push((arr1.slice(arr1.length / 2, arr1.length)));
  } else {
    newA.push((arr1.slice(0, Math.floor((arr1.length / 2) + 1))));
    newA.push((arr1.slice(((arr1.length / 2) + 1), arr1.length)));
  }
  console.log(newA);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


/*
LS shorter way

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

If the length is odd, the Math.ceil method
will account for it, making the first half
larger than the second by 1
*/