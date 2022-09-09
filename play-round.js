function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  let selector = Math.floor(Math.random() * 3);
//   console.log(selector);

  let choice = choices[selector];
//   console.log(choice);

  return choice;
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLowercase = playerSelection.toLowerCase();
  let computerSelectionLowercase = computerSelection.toLowerCase();
  console.log("Player lowercase:" + playerSelectionLowercase);
  console.log("Computer lowercase:" + computerSelectionLowercase);
  if (playerSelectionLowercase == computerSelectionLowercase) {
    return "It's a tie!";
  } else if (
      (playerSelectionLowercase == "rock" && computerSelectionLowercase == "paper") ||
      (playerSelectionLowercase == "paper" && computerSelectionLowercase == "scissors") ||
      (playerSelectionLowercase == "scissors" && computerSelectionLowercase == "rock")
  ) {
      return "You lost!";
  } else {
      return "You won!";
  }
    
}


const playerSelection = "paper";
console.log("Player:" + playerSelection);
const computerSelection = getComputerChoice();
console.log("Computer:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));