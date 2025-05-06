let computerScore = 0;
let humanScore = 0;
let round = 0;

// Generates a random choice for the computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Determines the winner of a single round
function playRound(humanChoice, computerChoice) {
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

// Adds event listeners to all buttons for handling player choices
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Retrieves player's choice based on the button's ID
        const humanChoice = button.id;
        // Generates a random choice for the computer.
        const computerChoice = getComputerChoice();
        round ++;

        // If neither player has reached 5 points, updates the game history and score display
        if (humanScore < 5 && computerScore < 5) {
            const result = playRound(humanChoice, computerChoice);
        
            const records = document.querySelector("#records");
            const textarea = records.firstElementChild;
            textarea.value += `\n${round} | You: ${humanChoice}, Computer: ${computerChoice}. ${result}`;

            const scores = document.querySelector("#scores");
            const p = scores.firstElementChild;
            p.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
        } 
        // If a player reaches 5 points, displays the final result and prompts for a replay
        else {
            const container = document.querySelector("#container");
            const finalResult = humanScore > computerScore ? "You win the game!" : "Computer wins the game!";
            const h = document.createElement("h3");
            h.textContent = finalResult;
            container.appendChild(h);
            
            // If the player confirms replay, reloads the page after a brief delay
            confirm("Play again?") ? setTimeout(() => window.location.reload(true), 3000) : false;
        } 
    });
});

