/*
Create a function that takes two integers
as arguments. The first argument is a count,
and the second is the starting number of a sequence
that your function will create.


The function should return an array containing
the same number of elements as the count argument.

The value of each element
should be a [multiple] of the starting number.

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/

function sequence(count, multiple) {
  let arr = [];
  let index = 1;
  while (arr.length < count) {
    arr.push(multiple * index);
    index += 1;
  }
  return arr;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 100000));

function sequenceTwo(count, multiple) {
  let arr = [];
  for (let i = 0; arr.length < count; i++) {
    arr.push(multiple * (i + 1));
  }
  return arr;
}

console.log(sequenceTwo(5, 1));
console.log(sequenceTwo(4, -7));
console.log(sequenceTwo(3, 0));
console.log(sequenceTwo(0, 100000));

/* shorter version map() */

function sequence3(count, num) {
  console.log([...Array(count)]);
  return [...Array(count)].map((_, index) => num * (index + 1));
  //map creates a new array from:
  // [undefined, undefined, undefined, undefined, undefined]
  // with each element in new array to be (num * (index + 1))
}

sequence3(5, 1);


/* shorter version reduce() */

function sequence4(count, num) {
  return [...Array(count)].reduce((array, _, index) => {
    array.push(num * (index + 1));
    return array;
  }, []); //look into arrays as a previous value for a reduce method
}
