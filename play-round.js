function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let selector = Math.floor(Math.random() * 3);
    console.log(selector);

    let choice = choices[selector];
    console.log(choice);
}

getComputerChoice()