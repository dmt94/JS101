const readline = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

const USER_WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

const WINNING_POINT = 3;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function logGreetingAndRules() {
  prompt("Welcome to ROCK-PAPER-SCISSORS-SPOCK-LIZARD!");
  prompt("RULES:");
  console.log("ROCK beats SCISSORS and LIZARD");
  console.log("PAPER beats ROCK and SPOCK");
  console.log("SCISSORS beats PAPER and LIZARD");
  console.log("LIZARD beats PAPER and SPOCK");
  console.log("SPOCK beats ROCK and SCISSORS\n");
  console.log("First to win 3 matches is the GRAND WINNER!\n");
}

function logChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice.toUpperCase()} and computer chose ${computerChoice.toUpperCase()}`);
}

function logGrandWinner(userTotalPoints) {
  if (userTotalPoints === WINNING_POINT) {
    prompt("You are the Grand Winner!\n");
  } else {
    prompt("Computer is the Grand Winner!\n");
  }
}

function playAgain() {
  prompt("Do you want to play again? (y/n)\n");
  let playAnother = readline.question().toLowerCase();

  while (!["y", "yes", "n", "no"].includes(playAnother)) {
    prompt("Type a valid answer (y/yes/n/no)\n");
    playAnother = readline.question().toLowerCase();
  }

  return playAnother;
}

function logFarewell() {
  prompt("Thanks for playing! Live long and prosper!\n");
}

function invalidChoice(userChoice) {
  return ((userChoice[0] === "s" && userChoice.length === 1) || userChoice.trim() === "");
}

function shortInput(userChoice, validArray) {
  for (let validChoice of validArray) {
    if (validChoice.startsWith(userChoice)) {
      return validChoice;
    }
  }
  return false;
}

function userChooses() {
  prompt(`Choose one: ${VALID_CHOICES.join(", ").toUpperCase()}`);
  prompt("Can type shortcuts for choice:\n'r -> rock', 'sp -> spock', etc.\n");
  let choice = readline.question().toLowerCase();

  while (invalidChoice(choice) || shortInput(choice, VALID_CHOICES) === false) {
    prompt("Type a valid answer.");
    prompt("If your choice begins with 's', type more than one character.\n");
    choice = readline.question().toLowerCase();
  }

  return shortInput(choice, VALID_CHOICES);
}

function compChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function roundWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "tie";
  return USER_WIN_CONDITIONS[userChoice].includes(computerChoice);
}

function logRoundWinner(whoWon) {
  if (whoWon === "tie") {
    prompt("It's a tie!\n");
  } else if (whoWon === true) {
    prompt("You won!\n");
  } else {
    prompt("Computer won!\n");
  }
}

function logScore(userScore, computerScore) {
  prompt(`[YOUR SCORE: ${userScore}, COMPUTER SCORE: ${computerScore}]`);
}

logGreetingAndRules();

while (true) {
  let userPoints = 0;
  let computerPoints = 0;

  while (userPoints < WINNING_POINT && computerPoints < WINNING_POINT) {
    let usersChoice = userChooses();
    let computersChoice = compChooses();
    let didUserWin = roundWinner(usersChoice, computersChoice);

    if (didUserWin === true) {
      userPoints += 1;
    } else if (didUserWin === false) {
      computerPoints += 1;
    }

    console.clear();

    logChoices(usersChoice, computersChoice);
    logRoundWinner(didUserWin);
    logScore(userPoints, computerPoints);
  }

  logGrandWinner(userPoints);

  let usersPlayAgain = playAgain();

  console.clear();

  if (usersPlayAgain === "n" || usersPlayAgain === "no") break;
}

logFarewell();