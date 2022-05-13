/*
Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random number
between 20 and 120 (inclusive).
*/

// let age = Math.floor((Math.random() * 100) + 21);

// console.log(`Teddy is ${age} years old!`);

function randomBetween(min, max) {
  if (max < min) {
    return (Math.floor(Math.random() * (min - max + 1)) + max);
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);