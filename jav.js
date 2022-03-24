let playerSelection
let playerScore = 0;
let computerScore = 0;
let draws = 0;     

const result = document.querySelector('.results')

document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scizzor').onclick = user;

function user(){
    playerSelection = this.id;
    let computerSelection =Math.random();
    if (computerSelection< 0.34) {
        computerSelection= "rock";
     }else if(computerSelection<= 0.67) {
        computerSelection= "paper";
     }else{
        computerSelection= "scizzor";
     };
    
     const computerWinRound = document.getElementsByClassName('.computerWin');
         

    const playerWinRound= document.getElementsByClassName('.playerWin');
    playerWinRound.textContent="Player wins this round!";


    const draw = document.createElement('p');
    draw.textContent = 'Draw!'
  
       if (playerSelection == 'rock' && computerSelection =='paper'){
         
        computerWinRound.textContent = "Computer wins this round!";
         computerScore++;

    } else if( playerSelection == 'rock' && computerSelection =='scizzor'){
     
      const playerWinRound= document.getElementsByClassName('.playerWin');
      playerWinRound.textContent="Player wins this round!";
     playerScore++;

    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        result.appendChild(draw);
        draws++;

    }


    if(playerSelection == 'scizzor' && computerSelection == 'rock'){
      computerWinRound.textContent = "Computer wins this round!";
      computerScore++;
    }
    else if ( playerSelection == 'scizzor' && computerSelection == 'paper'){
        result.appendChild(playerWinRound)
        playerScore++;
    }
    else if ( playerSelection == 'scizzor' && computerSelection == 'scizzor'){
      result.appendChild(draw)
      draws++;
    }

    if(playerSelection == 'paper' && computerSelection == 'scizzor'){
      computerWinRound.textContent = "Computer wins this round!";
      computerScore++;
    }
    else if ( playerSelection == 'paper' && computerSelection == 'rock'){
        result.appendChild(playerWinRound)
        playerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
      result.appendChild(draw)
      draws++;
    }
    
  
    if (playerScore === 5){ 
      const pScore = document.createElement('p')
      pScore.textContent = `player score is '${playerScore}, Player wins the game! Congratulations!'`
        result.appendChild(pScore) 
        document.getElementById('rock').disabled =true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scizzor').disabled = true;
    }
    else if(computerScore === 5){
      const cScore = document.createElement('p')
      cScore.textContent = `Computer score is ${computerScore},Computer wins the game! Congratulations! `
      result.appendChild(cScore)
      document.getElementById('rock').disabled =true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scizzor').disabled = true;
    }
    
  
}
