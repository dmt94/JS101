/*
Write a function that takes a grocery list in a two-dimensional array
and returns a one-dimensional array. Each element in the grocery list
contains a fruit name and a number that represents the
desired quantity of that fruit.
The output array is such that each fruit name appears
the number of times equal to its desired quantity.
*/

function buyFruit(nestedArr) {
  let list = [];
  let amount = 0;
  for (let pair of nestedArr) {
    while (amount < pair[1]) {
      list.push(pair[0]);
      amount += 1;
    }
    amount = 0;
  }
  return list;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//cleaner way: for loop within a forEach

function buyFruit2(arr) {
  const list = [];
  arr.forEach(fruitPair => {
    for (let i = 0; i < fruitPair[1]; i++) {
      list.push(fruitPair[0]);
    }
  });
  return list;
}