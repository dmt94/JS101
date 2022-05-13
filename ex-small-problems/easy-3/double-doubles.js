/*
Write a function that returns the number provided as
an argument [multiplied by two], unless the argument
is a double number; otherwise, return the double number as-is.

double number:
even-length number whose left-side digits
are exactly the same as its right-side digits

44, 3333, 103103, 7676 (symmetrical)

symmetrical -> leave as is
not symmetrical -> multiply by 2

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/

function twice(number) {
  if (Number.isNaN(Number(number))) {
    return 'Not a valid number.';
  }
  let stringNum = String(number);
  if (stringNum.length % 2 !== 0) {
    return (number * 2);
  }
  let stringNumFirstHalf = stringNum.slice(0, stringNum.length / 2);
  let stringNumSecondHalf = stringNum.slice(stringNum.length / 2);
  return stringNumFirstHalf === stringNumSecondHalf ?  number : number * 2;
}

console.log(twice('ok'));
console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));