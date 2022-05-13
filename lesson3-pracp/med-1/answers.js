

function slanted(string, amount) {
  let count = 0;
  while (count < amount) {
    console.log(string.padStart(string.length + count, ' '));
    count += 1;
  }
}

// slanted('The Flinstones Rock!', 10);

// for (let padding = 0; padding < 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

let munstersDescription = "The Munsters are creepy and spooky.";


let newMunsters = "";
for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    newMunsters += munstersDescription[i].toLowerCase();
  } else newMunsters += munstersDescription[i].toUpperCase();
}

console.log(newMunsters);

// let newMunsters2 = munstersDescription.split('').map(function(char) {
//   return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
// }).join("");

// console.log(newMunsters2);

let newMunsters2 = munstersDescription.split('').map(
  char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');

console.log(newMunsters2);