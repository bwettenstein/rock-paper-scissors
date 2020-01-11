const newGameButton = document.getElementById("new-game");
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
let playerScoreReport = document.getElementById("pScore");
let cpuScoreReport = document.getElementById("cpuScore");
let playerChosenIcon = document.getElementById("playerChosenIcon");
let computerChosenIcon = document.getElementById("cpuChosenIcon");
let totalRounds = document.getElementById("round");
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// GAME BUTTON FUNCTIONS
//
// ComputerChoice function will execute every time the user clicks on one of the buttons to select their move.
const computerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// Rock, paper, scissors button functions will execute on click and pass in the respective id and random choice from 
// the computer as function parameteres into the newGame function
rockButton.addEventListener("click", 
    function() {
        playGame(this.id, computerChoice());
});

paperButton.addEventListener("click",
    function() {
    playGame(this.id, computerChoice());
});

scissorsButton.addEventListener("click",
    function() {
    playGame(this.id, computerChoice());
});

//OTHER BUTTON FUNCTIONS
//
// newGame function resets the variable values to 0 and resets the the HTML code that was executed during the previous game.
const newGame = () => {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    playerScoreReport.innerHTML = playerScore;
    cpuScoreReport.innerHTML = computerScore;
    playerChosenIcon.innerHTML = "";
    computerChosenIcon.innerHTML = "";
    totalRounds.innerHTML = "0";
}
// Calls the newGame function to be executed based on a click of the button
newGameButton.addEventListener("click", newGame);

//GAME FUNCTIONS 
//
let playGame = (playerChoice, computerChoice) =>{
    let choices = playerChoice+computerChoice;
    switch(choices) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            displayPlayerIcon(playerChoice);
            displayCpuIcon(computerChoice);
            return win(playerChoice, computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            displayPlayerIcon(playerChoice);
            displayCpuIcon(computerChoice);
            return loss(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            displayPlayerIcon(playerChoice);
            displayCpuIcon(computerChoice);
            return draw(playerChoice, computerChoice);
            break;    
    }
}

const win = (playerChoice, computerChoice) => {
    playerScore++;
    if (rounds >= 5) {
        newGame();
    }
    else {
        rounds++;
        playerScoreReport.innerHTML = playerScore;
        totalRounds.innerHTML = rounds + " of 5";
        if (rounds >= 5) {
            finalGameStatus();
        }
    }

}

const loss = (playerChoice, computerChoice) => {
    computerScore++;
    if (rounds >= 5) {
        newGame();
    }
    else {
        rounds++;
        cpuScoreReport.innerHTML = computerScore;
        totalRounds.innerHTML = rounds + " of 5";
        if (rounds >= 5) {
            finalGameStatus();
        }
    }
}

const draw = (playerChoice, computerChoice) => {
    if (rounds >= 5) {
        newGame();
    }
    else {
        rounds++;
        totalRounds.innerHTML = rounds + " of 5";
        if (rounds >= 5) {
            finalGameStatus();
        }
    }
}

let finalGameStatus = () => {
    if (playerScore > computerScore) {
        alert("You won the game! \nTo start a new game click on 'new game' or any button on the left");
    }
    else if (computerScore > playerScore) {
        alert("You lost the game! \nTo start a new game click on 'new game' or any button on the left");
    }
    else {
        alert("It's a draw! \nTo start a new game click on 'new game' or any button on the left");
    }
}

// FUNCTIONS THAT DISPLAY IMAGES
//
let displayPlayerIcon = (playerChoice) => {
    if (playerChoice === "Rock") {
        playerChosenIcon.innerHTML = "<i class='fas fa-hand-rock' alt='rock' id='playerIcon'></i>";
    }
    else if (playerChoice === "Paper") {
        playerChosenIcon.innerHTML = "<i class='fas fa-hand-paper' alt='paper' id='playerIcon'></i>";
    }
    else {
        playerChosenIcon.innerHTML = "<i class='fas fa-hand-scissors' alt='scissors' id='playerIcon'></i>";
    }
}

let displayCpuIcon = (computerChoice) => {
    if (computerChoice === "Rock") {
        computerChosenIcon.innerHTML = "<i class='fas fa-hand-rock' alt='rock' id='cpuIcon'></i>";
    }
    else if (computerChoice === "Paper") {
        computerChosenIcon.innerHTML = "<i class='fas fa-hand-paper' alt='paper' id='cpuIcon'></i>";
    }
    else {
        computerChosenIcon.innerHTML = "<i class='fas fa-hand-scissors' alt='scissors' id='cpuIcon'></i>";
    }
}

