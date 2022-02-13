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
  }
  let digArray = arrayOfDigits.map(char => DIGITS[char]);
  let combine = digArray.reduce((prev, current) => {return (prev * 10) + current}, 0);
  if (negative === true) {
    return `-${combine}`;
  }
  else {
    return combine;
  }
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));
console.log(stringToSignedInteger("20"));

/*
_______________
LS SOLUTION  * clever solution *

 seeing that there are 3 paths to go
  (-) (+) (no sign)

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
*/
