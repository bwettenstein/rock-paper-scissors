const newGameButton = document.getElementById("new-game");
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
let playerScore = 0;
let computerScore = 0;
let rounds = 0;


const computerChoice = () => {
    const choices = ["Rock", "Raper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
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
}

// Gets the choices from both players and then calls functions based on the outcomes
let playGame = (playerChoice, computerChoice) =>{
    let choices = playerChoice+computerChoice;
    alert(choices);
    switch(choices) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerChoice, computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            loss(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperRock":
        case "ScissorsPaper":
            draw(playerChoice, computerChoice);
            break;    
    }
}

// Function that increments the player score and number of rounds elapsed after winning. ADD WRITING TO HTML WHEN FINISHED
const win = (playerChoice, computerChoice) => {
    playerScore++;
    rounds++;
}

const loss = (playerChoice, computerChoice) => {
    computerScore++;
    rounds++;
}

const draw = (playerChoice, computerChoice) => {
    rounds++;
}

let message = () => alert("Hello there");
newGameButton.addEventListener("click", newGame);
