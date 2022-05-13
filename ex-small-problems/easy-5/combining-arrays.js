/*
Write a function that takes 2 arrays as arguments
and returns an array containing the union of the values from the two
There should be no duplication of values in the returned array,
even if there are duplicates in the original arrays.
You may assume that both arguments will always be arrays.

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
*/

// function union(firstA, secondA) {
//   let newA = firstA;
//   for (let num of secondA) {
//     if (newA.includes(num)) {
//       continue;
//     } else newA.push(num);
//   }
//   return newA;
// }

function union(firstA, secondA) {
  const check = secondA.filter(num => !firstA.includes(num));
  return firstA.concat(check);

}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]