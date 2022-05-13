/* 

Write a function that takes a positive integer, n, 
as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal 
side in the images below) should have one end at the lower-left 
of the triangle, and the other end at the upper-right.

*/

function triangle(num, symbol) {
  let count = 0;
  let rightTriangle = '';
  let space = num;

  while (count < num) {
    space -= 1;
    count += 1;
    rightTriangle += ' '.repeat(space) + symbol.repeat(count) + '\n';
  }
  return rightTriangle.trimEnd();
}

console.log(triangle(6, '@'));

/* Good solution:

function triangle(num) {
 let str = '';
 for (let i = 1; i <= num; i++) {
   str += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
 };
  return str;
};
*/