// console.log("Hello World")

// TO DO 1
// Create a new function named getComputerChoice
    // Output will be a random string with the values "rock", "paper" or "scissors"

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// console.log(getComputerChoice());


// TO DO 2
// Create a new function named getHumanChoice
    // Output should be a prompt asking the user for their choice
    // Input should be a random string , case-insensitive

function getHumanChoice() {
    return prompt("Type your choice: 'rock', 'paper', or 'scissors'.");
}