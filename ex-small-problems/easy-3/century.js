function ordinalNum(number) {
  let strNum = String(number);
  switch (strNum[strNum.length - 1]) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return 'th';
  }
}

function century(year) {
  let theCentury = Math.ceil(year / 100);
  let strCentury = String(theCentury);
  let lastDigit = strCentury[strCentury.length - 1];
  let secondToLast = strCentury[strCentury.length - 2];
  let ordinal;

  if ((secondToLast === '1' && lastDigit === '1') ||
  (secondToLast === '1' && lastDigit === '2') ||
  (secondToLast === '1' && lastDigit === '3')) {
    ordinal = 'th';
  } else {
    ordinal = ordinalNum(theCentury);
  }
  return `${theCentury + ordinal}`;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));

/*
What Century is That?

Write a function that takes a year as input and returns the century.

new centuries begin in years that end with 01

19-01 -> 20thcentury

if (digit > 3 && ends with '01') ->

1 - 9 (1 digit / century

100 years = 1 century
<= 100 (1st)
(if 3+ digits && end with 01) = new century


ordinal indicator:
-

number / 100 => century

let strNum = String(number);
let arrNum = strNum.split('');

Math.ceil()
*/

