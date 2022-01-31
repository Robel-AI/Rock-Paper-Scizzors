let playerSelection
let playerScore = 0;
let computerScore = 0;
let draws = 0;     
function computerPlay(){
    let choice = ['rock','paper', 'scizzor']
    return choice[Math.floor(Math.random()*choice.length)];
}

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

let computerSelection

function playRound(playerSelection, computerSelection){      
   
    computerSelection = computerPlay();
    
    if (playerSelection == 'rock' && computerSelection =='paper'){
         return computerWinRound;
    } else if( playerSelection == 'rock' && computerSelection =='scizzor'){
        return playerWinRound;
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return draw;
    }
    else;


    if(playerSelection == 'scizzor' && computerSelection == 'rock'){
           return computerWinRound;
    }
    else if ( playerSelection == 'scizzor' && computerSelection == 'paper'){
        return playerWinRound;
    }
    else if ( playerSelection == 'scizzor' && computerSelection == 'scizzor'){
        return draw;
    }
    else;

    if(playerSelection == 'paper' && computerSelection == 'scizzor'){
        return computerWinRound;
    }
    else if ( playerSelection == 'paper' && computerSelection == 'rock'){
        return playerWinRound;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return draw;
    }
    
    else return 'something went wrong'
}
   
for (let i = 0; i < 1000; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
  
    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }
        
function gameScore(roundResult) {
  
    if (roundResult === playerWinRound) {
      playerScore++;
    } else if (roundResult === draw) {
      draw++;
    } else {
      computerScore++;
    }
  
  
    if (playerScore === 5) {
      console.log(playerWin);
      return;
    }
    if (computerScore === 5) {
      console.log(computerWin);
      return;   
    }
}     




