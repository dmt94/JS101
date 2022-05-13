let rlSync = require('readline-sync');
let numArr = [];

function invalid(num) {
  return Number.isNaN(Number(num));
}

function prompt(order) {
  let num = rlSync.question(`Enter the ${order} number: `);

  while (invalid(num)) {
    console.log('Please enter a valid number.');
    num = rlSync(`Enter the ${order} number: `);
  }

  if (order !== 'last') {
    numArr.push(num);
  }
  return num;
}

prompt('1st');
prompt('2nd');
prompt('3rd');
prompt('4th');
prompt('5th');
let lastNum = prompt('last');


if (numArr.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numArr.join(',')}`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numArr.join(',')}`);
}
