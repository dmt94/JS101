

// function stringy(num) {
//   let string = '';
//   while (string.length < num) {
//     string += '1';
//     if (string.length < num) {
//       string += '0';
//     }
//   }
//   return string;
// }

// console.log(stringy(7));


let number = 7;


function stringy(num) {
  let string = '';
  for (let count = 0; count < number; count++) {
    count % 2 === 0 ? string += '1' : string += '0';
  }
  return string;
}

console.log(stringy(7))