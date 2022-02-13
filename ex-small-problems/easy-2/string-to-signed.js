

// function stringToSignedInteger(string) {
//   return +string;
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true



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

/*
MY SOLUTION
*/

function stringToSignedInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split(""); 
  let negative;
  if (arrayOfDigits[0] == '-' || arrayOfDigits[0] == '+') {
    arrayOfDigits[0] == '-' ? negative = true : negative = false;
    arrayOfDigits.shift();
    let shiftArray = arrayOfDigits.map(char => DIGITS[char]);
    let combine = shiftArray.reduce((prev, current) => { return (prev * 10) + current }, 0);
    if (negative === true) {
      return `-${combine}`;
    }
    else {
      return combine;
    }
  }
  else {
    let numA = arrayOfDigits.map(char => DIGITS[char]);
    let noSign = numA.reduce((prev, current) => {return (prev * 10) + current}, 0);
    return noSign;
  }
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));
console.log(stringToSignedInteger("20"));