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
// returns 'result', an integer that represents the winner of the round
function playRound() {
    // variable 'result' to be used to store the result
    let result;
    // get user's input and set variable 'userChoice' to input
    let userChoice = window.prompt("Rock, Paper or Scissors?");
    // variable 'computerChoice' set to return from getComputerChoice() call
    let computerChoice = getComputerChoice();
    // WHILE loop to ensure that 'userChoice' is an eligible choice
    while (true) {
        //set 'userChoice' to lowercase
        userChoice = userChoice.toLowerCase();
        // IF 'userChoice' is not a valid choice
        if(!(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors')) {
            // get user's input and set variable 'userChoice' to input
            userChoice = window.prompt("Invalid choice! Rock, Paper or Scissors?");
        }
        // ELSE 'userChoice' is a valid choice
        else {
            // break out of WHILE loop
            break;
        }   
    }

    // compare the two options and set 'result' to option
    // IF the choices are the same
    if(userChoice === computerChoice) {
        // 'result' set to 2
        result = 2;
    }
    // ELSE IF 'userChoice' is rock
    else if(userChoice === 'rock') {
        // IF 'computerChoice' is paper
        if (computerChoice === 'paper') {
            // 'result' set to 0
            result = 0;
        }
        // ELSE 'computerChoice' is scissors
        else {
            // 'result' set to 1
            result = 1;
        }
    }
    // ELSE IF 'userChoice' is paper
    else if(userChoice === 'paper') {
        // IF 'computerChoice' is scissors
        if (computerChoice === 'scissors') {
            // 'result' set to 0
            result = 0;
        }
        // ELSE 'computerChoice' is rock
        else {
            // 'result' set to 1
            result = 1;
        }
    }
    // ELSE IF 'userChoice' is scissors
    else if(userChoice === 'scissors') {
        // IF 'computerChoice' is rock
        if (computerChoice === 'rock') {
            // 'result' set to 0
            result = 0;
        }
        // ELSE 'computeChoice' is paper
        else {
            // 'result' set to 1
            result = 1;
        }
    }
    // return 'result'
    return result;
}

// function game() that calls calls the playRound() function until five rounds have been played without a tie
function game() {
    // variable 'round' set to 0 that will determine when the game is over
    let round = 0;
    // variable 'playerScore' set to 0 that holds player's score
    let playerScore = 0;
    // variable 'computerScore' set to 0 that holds computer's score
    let computerScore = 0;
    // WHILE 'round' is not equal to 5
    while (round != 5) {
        // call playRound function and set variable 'result' to the return value
        let result = playRound();
        // switch statement to check 'result'
        switch(result) {
            // case 0: computer has won the round
            case 0:
                // increase 'computerScore' and 'round' by one
                computerScore++;
                round++;
                // display in console that computer won
                console.log(`You lose! \nYou: ${playerScore} \nComputer: ${computerScore}`);
                // break from switch
                break;
            // case 1: player has won the round
            case 1:
                // increases 'playerScore' and 'round' by one
                playerScore++;
                round++;
                // display in console that player won
                console.log(`You win! \nYou: ${playerScore} \nComputer: ${computerScore}`);
                // break from switch
                break;
            // case 2: round was a tie
            case 2:
                // display in console that it was a tie
                console.log(`A tie!! \nYou: ${playerScore} \nComputer: ${computerScore}`);
                // break from switch
                break;
        }
    }

    // Display final results of the game
    // IF player won
    if( playerScore > computerScore) {
        // display vicotry message
        console.log(`You win!! \nYou: ${playerScore} \nComputer: ${computerScore} \nCongratualtions!!`);
    }
    // ELSE computer won
    else {
        // display lose message
        console.log(`You lose! \nYou: ${playerScore} \nComputer: ${computerScore} \nBetter luck next time!`);
    }
}

// Calls game() to start a game
game();