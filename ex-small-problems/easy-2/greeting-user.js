/*
Write a program that will ask for user's name. 
The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.
*/

let rlSync = require('readline-sync');
//ensures that if more than one exclamation mark is made, then they are also ignored
function greetingWithAttitude(name) {
  let askName = rlSync.question('What is your name?\n');
  if (askName.includes('!')) {
    let newName = askName.split('').filter(char => char !== '!').join('');
    return `AH, DON'T YELL AT ME. HI ${newName.toUpperCase()}. WHY ARE WE SCREAMING?`
  }
  else {
    return `Good day, ${askName}.`
  }
}

console.log(greetingWithAttitude());


/*
LS SOLUTION
_______________
let name = rlSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);                 (index -1 is the end of array/string)
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
*/
