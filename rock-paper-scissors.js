// function getComputerChoice() that represents computer's choice and returns either rock, paper or scissors
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

// function playRound() that takes player's choice and calls getComputerChoice() and returns result of comparison
// variable 'result' to be used to store the result
// get user's input and set variable 'userChoice' to input
// variable 'computerChoice' set to return from getComputerChoice() call
// Ensure that 'userChoice' is an eligible choice
// WHILE typeOf 'userChoice' is not a string && 'userChoice' is not equal to rock paper or scissors
//      WHILE typeOf 'userChoice' is not a string
//          get user's input and set variable 'userChoice' to input
//      set 'userChoice' to lowercase
//      WHILE 'userChoice' is not equal to rock paper or scissors
//          get user's input and set variable 'userChoice' to input
// compare the two options and set 'result' to option
// IF the choices are the same
//      'result' set to 2
// ELSE IF 'userChoice' is rock
//      IF 'computerChoice' is paper
//          'result' set to 0
//      ELSE
//          'result' set to 1
// ELSE IF 'userChoice' is paper
//      IF 'computerChoice' is scissors
//          'result' set to 0
//      ELSE
//          'result' set to 1
// ELSE IF 'userChoice' is scissors
//      IF 'computerChoice' is rock
//          'result' set to 0
//      ELSE
//          'result' set to 1
// return 'result'

// function game() that calls calls the playRound() function until either the player or computer have won three games
// variable 'round' set to 0 that will determine when the game is over
// variable 'playerScore' set to 0 that holds player's score
// variable 'computerScore' set to 0 that holds computer's score
// WHILE 'round' is not equal to 5
//      call playRound function and set variable 'result' to the return value
//      switch statement to check 'result'
//          case 0 
//              increase 'computerScore' and 'round' by one
//              display in console that computer won
//              break from switch
//          case 1 
//              increases 'playerScore' and 'round' by one
//              display in console that player won
//              break from switch
//          case 2
//              display in console that it was a tie
//              break from switch