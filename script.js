function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());


function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
  while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Invalid choice. Please choose rock, paper, or scissors").toLowerCase();
  }
  return humanChoice;
}

console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log("It's a tie!");
  } else if (human === 'rock') {
    if (computer === 'scissors') {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (computer === 'paper') {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    }
  } else if (human === 'paper') {
    if (computer === 'rock') {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (computer === 'scissors') {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    }
  } else if (human === 'scissors') {
    if (computer === 'paper') {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (computer === 'rock') {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
  } else {
    console.log("Invalid choice, please choose rock, paper, or scissors.");
  }

  console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(`Round ${i + 1}: Human - ${humanScore}, Computer - ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
  } else {
    console.log(`The game is a tie! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
  }
}

playGame();
