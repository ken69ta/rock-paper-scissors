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
    
// console.log(getHumanChoice())


// TO DO 3
// Create two new global variables, humanScore and computerScore, and initialize them with a value of 0

// TO DO 4
// Create a new function named playRound that takes 2 parameters (computerChoice, humanChoice)
    // Use toLowerCase() method on humanChoice to convert it to lowercase
    // Write a conditional (if else statement) and return the message
    // Increment the scores of the two global variables

function playRound(humanChoice, computerChoice) {
    console.log(`Choices => You: ${humanChoice}, Computer: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore += 1;
        return "You win this round!";
    } else {
        computerScore += 1;
        return "Computer wins this round!";
    }
}


// TO DO 5
// Create a new function named playGame, this function will call playRound until round 5

function playGame(totalRound) {
    for (let i = 0; i < totalRound; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Scores => You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log(humanScore > computerScore ? "You win the game!" : computerScore > humanScore ? "Computer wins the game!" : "It's a tie game!");
}


playGame(5);