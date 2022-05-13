function countPositivesSumNegatives(input) {
  const isAllZero = input.every(item => item === 0);
  if (input === [] || input === null || input === [0, 0] || isAllZero) return [];
  let finalArray = [];
  let positiveCount = input.filter(num => num > 0).length;
  let negativeNum = input.filter(num => num < 0);
  let sumOfNegative = negativeNum.reduce((prev, curr) => prev + curr, 0);
  finalArray.push(positiveCount, sumOfNegative);
  return finalArray;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 0]));


console.log([0, 0] === null);