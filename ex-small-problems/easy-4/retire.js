// Build a program that logs when the user will retire and how
// many more years the user has to work until retirement.

const rlSync = require('readline-sync');

function prompt(msg) {
  let age = rlSync.question(msg);
  return age;
}

let presentAge = prompt('What is your age? ');
let retireAt = prompt('At what age would you like to retire? ');

function untilRetirement(currentAge, retirementAge) {
  let currentYear = new Date().getFullYear();
  let yearsUntilRetirement = retirementAge - currentAge;
  let retirementYear = yearsUntilRetirement + currentYear;

  return `
  It's ${currentYear}. You will retire in ${retirementYear}.
  You have ${yearsUntilRetirement} years of work to go! 
  But remember that your whole life is the journey. 
  Remember to stay present always.
  You never really "work" when you love what you do
  and don't take any moment for granted.\n`;
}

console.log(untilRetirement(presentAge, retireAt));