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