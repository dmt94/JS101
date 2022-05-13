function findFibonacciIndexByLength(length) {
  let fibArray = [1n, 1n];
  let newSum = fibArray[0] + fibArray[1];
  while (String(newSum).length < length) {
    newSum = BigInt(fibArray[fibArray.length - 1])
    + BigInt(fibArray[fibArray.length - 2]);
    fibArray.push(newSum);
  }
  return fibArray.length;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));

/*
Write a function that calculates and returns the
[index] of the
first [Fibonacci number] that has

the number of [digits]
specified by the argument.

The first Fibonacci number has an index of 1.)

0 + 1 = 1 (this one is the first official fibonacci number)

 0  1  2  3  4  ...
(1, 1, 2, 3, 5, 8, 13, 21, ...)


findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13

- 2 in the argument means that we are looking
for the [first] fibonacci value that has 2 digits.
The first value to have 2 digits is 13, which has the index of 7..

findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144

- 3 in the argument means that we are looking
for the [first] fibonacci value that has 3 digits.
The first value to have 3 digits is 144, which has the index of 12..


You may assume that the argument is
always an integer greater than or equal to 2.
*/
