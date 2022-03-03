let rlSync = require('readline-sync');

console.log(`\n~~Welcome to your own personal Mortgage Calculator!~~~\n`);

let userInfo = {
  username: '',
  loan: null,
  monthlyR: null,
  duration: null,
};

function invalidName(invName) {
  return invName === '' || invName === undefined || invName === null;
}

function invalidLoanAPRChoice(invLoan) {
  return invLoan <= 0 || Number.isNaN(Number(invLoan));
}

function invalidLoanDuration(invDuration) {
  return invDuration < 20 || invDuration > 50 || !Number.isInteger(invDuration);
}

while (true) {
  userInfo.username = rlSync.question("What is your name?\n");

  while (invalidName(userInfo.username)) {
    console.log('Type a valid name');
    userInfo.username = rlSync.question("What is your name?\n");
  }

  userInfo.loan = rlSync.question("What is your loan amount?\n");

  if (userInfo.loan.includes('$')) {
    let newLoanChoice = userInfo.loan.replaceAll('$', '');
    userInfo.loan = Number(newLoanChoice);
  }

  while (invalidLoanAPRChoice(userInfo.loan)) {
    console.log('Type a valid loan amount');
    userInfo.loan = rlSync.question("What is your loan amount?\n");
  }

  let aprChoice = rlSync.question("What is the Annual Percentage Rate (APR)? [Enter integer or decimal]\n");

  while (invalidLoanAPRChoice(aprChoice)) {
    console.log('Type a valid APR');
    aprChoice = rlSync.question("What is the Annual Percentage Rate (APR)? [Enter integer or decimal]\n");
  }

  if (Number.isInteger(Number(aprChoice))) {
    userInfo.monthlyR = (aprChoice / 100) / 12;
  } else {
    userInfo.monthlyR = aprChoice / 12;
  }

  let loanDurationChoice = Number(rlSync.question("What is your expected loan duration? [Enter in years]\n"));

  while (invalidLoanDuration(loanDurationChoice)) {
    console.log('Loan duration allowed is between 20 - 50 full years.');
    loanDurationChoice = Number(rlSync.question("What is your expected loan duration? [Enter in years]\n"));
  }

  userInfo.duration = loanDurationChoice * 12;

  let monthlyPayment = userInfo.loan *
                    (userInfo.monthlyR /
                    (1 - Math.pow((1 +
                    userInfo.monthlyR), (-userInfo.duration))));

  console.log(`\n>>>MORTGAGE BOT'S RESULT:\n${userInfo.username}, your estimated monthly payment is $${monthlyPayment.toFixed(2)}\n`);

  let askAgain = rlSync.question(`Would you like to make another calculation, ${userInfo.username}?\nType 'yes' to continue or 'no' to exit.\n`).toLowerCase();

  while (askAgain !== 'yes' && askAgain !== 'no') {
    console.log("Type 'yes' to continue, 'no' to exit.");
    askAgain = rlSync.question(`Ready to make another calculation, ${userInfo.username}?\n`);
  }

  if (askAgain === 'no') {
    console.log(`\n>>>MORTGAGE BOT FAREWELL:\nHope you find the house of your dreams, ${userInfo.username}!`);
    break;
  }
}// end
