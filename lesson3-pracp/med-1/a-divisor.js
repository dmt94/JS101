// function factors(number) {
//   let divisor = number; //divisor starts off with the number bc divisor will count down
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }



//

function factors2(number) {
  let factors = [];
  if (number > 0) {
    for (let divisor = number; divisor > 0; divisor -= 1) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
    } return factors;
  } else return 'No answers for numbers less than or equal to 0.'
}

console.log(factors2(10));