function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let selector = Math.floor(Math.random() * 3);
    console.log(selector);

    let choice = choices[selector];
    console.log(choice);

    return choice;
}

function playRound(playerSelection, computerSelection) {

}

console.log(getComputerChoice());

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));