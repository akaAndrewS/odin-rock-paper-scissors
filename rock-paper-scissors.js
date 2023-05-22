// function getComputerChoice() that represents computer's choice and returns either rock, paper or scissors
// variable 'computerChoice' to be used to store the computer's choice
// variable 'result' to be used to store result, default is 0
// sets 'result' to a random number between 0-2
// sets 'computerChoice' to correct option based on 'result'
// returns 'computerChoice'


/* FIXME change return value to either:
        0 - if computer won
        1 - if user won
        2 - if tie
 */
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
//      'result' set to "It's a tie!"
// ELSE IF 'userChoice' is rock
//      IF 'computerChoice' is paper
//          'result' set to "You lose! Paper beats rock!"
//      ELSE
//          'result' set to "You win! Rock beats scissors!"
// ELSE IF 'userChoice' is paper
//      IF 'computerChoice' is scissors
//          'result' set to "You lose! Scissors beat paper!"
//      ELSE
//          'result' set to "You win! Paper beats rock!"
// ELSE IF 'userChoice' is scissors
//      IF 'computerChoice' is rock
//          'result' set to "You lose! Rock beats scissors!"
//      ELSE
//          'result' set to "You win! Scissors beat paper!"
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