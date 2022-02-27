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
  return nameInput === '' || nameInput === null || nameInput === undefined
}

function invNameT(nInput, lang='en') {
  return MESSAGES[lang][nInput];
}

function invNumT(numInput, lang='en') {
  return MESSAGES[lang][numInput];
}

function invOp(oper, lang='en') {
  return MESSAGES[lang][oper];
}

//greetings and goodbyes
function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function aGreeting(thegreeting, lang='en') {
  return MESSAGES[lang][thegreeting];
}

function aGoodbye(bye, lang='en') {
  return MESSAGES[lang][bye];
}

//input numbers and operations
function enterFirst(fNum, lang='en') {
  return MESSAGES[lang][fNum];
}

function enterSecond(sNum, lang='en') {
  return MESSAGES[lang][sNum];
}

function enterOp(op, lang=en) {
  return MESSAGES[lang][op];
}

//result message
function resultL(theResult, lang=en) {
  return MESSAGES[lang][theResult];
}

//ask to perform another operation
function anotherOne(tryAgain, lang=en) {
  return MESSAGES[lang][tryAgain];
}

// WELCOME MESSAGE - BEGIN
prompt(messages('welcome', language)); //key, value
// ASK FOR USER NAME
let username = readline.question();

while (invalidName(username)) {
  prompt(invNameT('validName', language));
  username = readline.question();
}

prompt(aGreeting('greeting', language) + ` ${username}!`);

while (true) {

  prompt(enterFirst('firstNumber', language));
  let firstNum = readline.question();

  while (invalidNumber(firstNum)) {
    prompt(invNumT('invalidNum', language));
    firstNum = readline.question();
  }

  prompt(enterSecond('secondNum', language))
  let secNum = readline.question();

  while (invalidNumber(secNum)) {
    prompt(invNumT('invalidNum', language));
    secNum = readline.question();
  }

  prompt(enterOp('chooseOp', language));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(invOp('invalidO', language));
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

    prompt(resultL('result', language) + `${output}`);

    prompt(anotherOne('replay', language));
    let answer = readline.question().toLowerCase();

  if (!['y', 'yes', 'si', 'oo'].includes(answer)) {
    prompt(aGoodbye('goodbye', language) + ` ${username}!`);
    break;
  }
}//end

/*
Bonus Features:
1. ask user for another calculation
2. extract messages in the program to a configuration file
3. internationalize the messages in the calculator; 
send configuration file to [translators] in your code
*/