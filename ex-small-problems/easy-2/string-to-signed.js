

function stringToSignedInteger(string) {
  return +string;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true



/*
_____________________________________
LS SOLUTION:

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
_______________________________________
OTHER SOLUTIONS: 

function hasSign(stringNum) {
  if (stringNum.startsWith('-') || stringNum.startsWith('+')) return stringNum[0];
}

function stringToSignedInteger(stringNum) {
  let sign = hasSign(stringNum)
  if (sign) {
    stringNum = stringNum.slice(1)
  }

  let stringArr = stringNum.split('').reverse() 

  let total = stringArr.reduce((total, num, pow) => total + num * Math.pow(10, pow), 0); 

  return sign === '-' ? total *= -1 : total;
}
*/