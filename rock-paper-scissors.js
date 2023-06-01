// function getComputerChoice() that represents computer's choice
// returns 'computerChoice', a string that is either rock, paper or scissors
function getComputerChoice() {
    // variable 'computerChoice' to be used to store the computer's choice
    let computerChoice;
    // variable 'result' set to a random number between 0-2
    let result = Math.floor(Math.random() * 3);
    // sets 'computerChoice' to correct option based on 'result'
    switch (result) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'paper';
            break;
    }
    // returns 'computerChoice'
    return computerChoice;
}

// function playRound() that gets player's choice and calls getComputerChoice()
// results variable is used to display the winner and score in the div
function playRound(choice) {
    // get user's input and set variable 'userChoice'
    let userChoice = choice;
    // variable 'computerChoice' set to return from getComputerChoice() call
    let computerChoice = getComputerChoice();
    // compare the two options and set 'results' to score
    // IF the choices are the same
    if(userChoice === computerChoice) {
        // display in 'results' that it was a tie
        results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nA tie!!`;
    }
    // ELSE IF 'userChoice' is rock
    else if(userChoice === 'rock') {
        // IF 'computerChoice' is paper
        if (computerChoice === 'paper') {
            // increase 'computerScore' by one
            computerScore++;
            // display in 'results' that computer won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nYou lose!`;
        }
        // ELSE 'computerChoice' is scissors
        else {
            // increases 'playerScore' by one
            playerScore++;
            // display in 'results' that player won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore}  \nYou win!`;
        }
    }
    // ELSE IF 'userChoice' is paper
    else if(userChoice === 'paper') {
        // IF 'computerChoice' is scissors
        if (computerChoice === 'scissors') {
            // increase 'computerScore' by one
            computerScore++;
            // display in 'results' that computer won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nYou lose!`;
        }
        // ELSE 'computerChoice' is rock
        else {
            // increases 'playerScore' by one
            playerScore++;
            // display in 'results' that player won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore}  \nYou win!`;
        }
    }
    // ELSE IF 'userChoice' is scissors
    else if(userChoice === 'scissors') {
        // IF 'computerChoice' is rock
        if (computerChoice === 'rock') {
            // increase 'computerScore' by one
            computerScore++;
            // display in 'results' that computer won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nYou lose!`;
        }
        // ELSE 'computeChoice' is paper
        else {
            // increases 'playerScore' by one
            playerScore++;
            // display in 'results' that player won
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore}  \nYou win!`;
        }
    }

    // IF player OR computer has 5 points display final results of the game
    if(playerScore == 5 || computerScore == 5) {
        //Disable the buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        resetButton.style.visibility = "visible";
        
        // IF player won
        if( playerScore > computerScore) {
            // display vicotry message
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nYou win!! \nCongratualtions!!`;
        }
        // ELSE computer won
        else {
            // display lose message
            results.textContent = `You: ${playerScore} \nComputer: ${computerScore} \nYou lose! \nBetter luck next time!`;
        }
    }
}
// function resetGame() that returns the UI to its begining styles and values
function resetGame() {
    // set computerScore and playerScore to 0
    computerScore = 0;
    playerScore = 0;
    
    // enables the three choice buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    // sets results to blank
    results.textContent = "";

    // changes resetButton to hidden
    resetButton.style.visibility = "hidden";
}

//variables for nodes
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const resetButton = document.querySelector('#reset');

//hide resetButton
resetButton.style.visibility = "hidden";

//adding EventListners for the three buttons to call playRound() with the correct selection
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

//adding EventListener to resetButton to call resetGame()
resetButton.addEventListener('click', () => resetGame());

//intitalize and declare computerScore and playerScore to 0
let computerScore = 0;
let playerScore = 0;