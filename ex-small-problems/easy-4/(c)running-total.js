/*
Write a function that takes an array of
numbers and returns an array with the same
number of elements, but with each element's
value being the running total from the original array.
*/

// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push((sum += array[idx]));
//   }

//   console.log(resultArray);
// };

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []


// function runningTotal(num) {
//   let arr = [];
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i]; //previous value is saved
//     // console.log(total);
//     // each iteration adds up, then that's what gets added
//     arr.push(total);
//   }
//   console.log(arr);
// }

// runningTotal([2, 5, 13]);


function runningTotal(arrNum) {
  let newArr = [];
  let sum = 0; //previous value is saved
  arrNum.forEach(num => newArr.push(sum += num));
  console.log(newArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
