/*
takes an array as argument and reverses its elements in place
- mutate the array
- return value is same array
*/

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

/*
Note that the while loop terminates at
the middle of the list.
If we continued,we would end up rebuilding
the original array.
*/

let array = ["a", "b", "c", "d", "e"];

console.log(reverse(array));

