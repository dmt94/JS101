const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function greeting() {
  prompt('Greetings! Welcome to THE ROCK PAPER SCISSORS GAME\n');
  console.log('(⇀‸↼‶)⊃━☆ﾟ.*･');
}

function farewellMsg() {
  console.log('\nThanks for playing ROCK PAPER SCISSORS!');
  console.log('\nFarewell and be well! ٩(｡•́‿•̀｡)۶\n');
}

function userChooses() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Sorry. Not a valid choice.");
    choice = readline.question();
  }

  return choice;
}

function compChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function userWon(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return true;
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    return false;
  }
  return 'tie';
}

function displayWinner(choice, computerChoice, whoWon) {
  prompt(`You chose ${choice}! Computer chose ${computerChoice}!\n`);

  if (whoWon !== 'tie') {
    console.log(whoWon === true ? 'You won! *dance*\n' : 'You lost! Computer won ᕙ(⇀‸↼‶)ᕗ\n');
  } else {
    console.log("It's a tie!\n");
  }
}

function invalidAnswer(answer) {
  return answer[0] !== 'n' && answer[0] !== 'y';
}

function playAgain() {
  prompt("Do you want to play again? (y/n)");
  let again = readline.question().toLowerCase();

  while (invalidAnswer(again)) {
    prompt("Please type a valid answer: 'y' or 'n'");
    again = readline.question().toLowerCase();
  }
  return again;
}

greeting();

while (true) {
  let userChoice = userChooses();
  let compChoice = compChooses();
  let didUserWin = userWon(userChoice, compChoice);

  displayWinner(userChoice, compChoice, didUserWin);

  let playAgainAnswer = playAgain();

  if (playAgainAnswer[0] === 'n') break;

  console.clear();
}

farewellMsg();
