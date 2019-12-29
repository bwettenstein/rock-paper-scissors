const newGame = document.getElementById("new-game");
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
let playerScore = 0;
let computerScore = 0;

const computerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Add the ability to display the reset scores to players in html
const resetScore = () => {
    playerScore = 0;
    computerScore = 0;
}

let message = () => alert("Hello there");

rock.addEventListener("dblclick", () => alert(playerScore));
rock.addEventListener("click", () => ++playerScore);
newGame.addEventListener("click", resetScore);
