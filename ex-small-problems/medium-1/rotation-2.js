/*
Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you want to
rotate to the end and shift the remaining digits to the left.

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

count digits backwards (start from end)
put first digit from this backward count to the end (shift digits left)
*/

function rotateRightmostDigits(digit, order) {
  let firstHalf = String(digit).slice(0, String(digit).length - order).split('');
  let digitOrder = String(digit).slice(String(digit).length - order).split('');
  digitOrder.push(digitOrder.shift());
  return firstHalf.concat(digitOrder).join('');
}

/* H's answer */

const rotateRightmostDigits2 = function (num, i) {
  const newN = String(num);
  console.log(newN.replace(newN.at(-i), "").concat(newN.at(-i)));
};


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917