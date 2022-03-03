const MESSAGES = require('./calculator_messages.json');

let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Please pick a language, enter:\n[en] for English\n[es] for Spanish\n[tg] for Tagalog");
let language = readline.question();

while (!['en', 'es', 'tg'].includes(language)) {
  prompt('Enter (without the brackets):\n[en] for English\n[es] for Spanish\n[tg] for Tagalog');
  language = readline.question();
}

// invalid
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)); //after taking away white space, there is nothing
}

function invalidName(nameInput) {
  return nameInput === '' || nameInput === null || nameInput === undefined;
}

function displayMessage(message, lang = 'en') {
  return MESSAGES[lang][message];
}//CONVENIENT H FOR THE WIN!

// WELCOME MESSAGE - BEGIN
prompt(displayMessage('welcome', language)); //key, value
// ASK FOR USER NAME
let username = readline.question();

while (invalidName(username)) {
  prompt(displayMessage('validName', language));
  username = readline.question();
}

prompt(displayMessage('greeting', language) + ` ${username}!`);

while (true) {

  prompt(displayMessage('firstNumber', language));
  let firstNum = readline.question();

  while (invalidNumber(firstNum)) {
    prompt(displayMessage('invalidNum', language));
    firstNum = readline.question();
  }

  prompt(displayMessage('secondNum', language));

  let secNum = readline.question();

  while (invalidNumber(secNum)) {
    prompt(displayMessage('invalidNum', language));
    secNum = readline.question();
  }

  prompt(displayMessage('chooseOp', language));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(displayMessage('invalidO', language));
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(firstNum) + Number(secNum);
      break;
    case '2':
      output = Number(firstNum) - Number(secNum);
      break;
    case '3':
      output = Number(firstNum) * Number(secNum);
      break;
    case '4':
      output = Number(firstNum) / Number(secNum);
      break;
  }
  prompt(displayMessage('result', language) + `${output}`);

  prompt(displayMessage('replay', language));

  let answer = readline.question().toLowerCase();

  if (!['y', 'yes', 'si', 'oo'].includes(answer)) {
    prompt(displayMessage('goodbye', language) + ` ${username}!`);
    break;
  }
}//end