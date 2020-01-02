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

const computerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Add the ability to display the reset scores to players in html
// Add ability to display icons of selections in the boxes
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

// Gets the choices from both players and then calls functions based on the outcomes
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

// Function that increments the player score and number of rounds elapsed after winning. ADD ending the game when 5 rounds elapse
const win = (playerChoice, computerChoice) => {
    playerScore++;
    if (rounds >= 5) {
        newGame();
    }
    else {
        rounds++;
        playerScoreReport.innerHTML = playerScore;
        totalRounds.innerHTML = rounds;
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
        totalRounds.innerHTML = rounds;
    }
}

// Need to add ability to write to html when there's a draw
const draw = (playerChoice, computerChoice) => {
    if (rounds >= 5) {
        newGame();
    }
    else {
        rounds++;
        totalRounds.innerHTML = rounds;
    }
}

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

newGameButton.addEventListener("click", newGame);
