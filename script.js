let playerScore=0;
let computerScore =0;
let results;

const pickBtn = document.querySelectorAll('button');
const resulstDisp = document.querySelector('.display-results');
const playerDisp = document.createElement('div');
const computerDisp = document.createElement('div');
const picks = document.createElement('div');

resulstDisp.textContent = `Pick a button to begin`;

pickBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{

        resulstDisp.textContent = '';

        results = playRound(btn.className,getComputerChoice());

        btn.classList.add('clicked');

        switch(results[1]){
            case 1:
                playerScore ++;
                break;
            case 0:
                computerScore ++;
                break;
        }

        picks.textContent = results[0];
        playerDisp.textContent = `Player score is: ${playerScore}`;
        computerDisp.textContent = `Computer score is: ${computerScore}`;

        resulstDisp.appendChild(picks);
        resulstDisp.appendChild(playerDisp);
        resulstDisp.appendChild(computerDisp);

        console.log(`The score is:\n user:${playerScore}\n computer:${computerScore}`);

        if(playerScore == 5 || computerScore == 5){
            resulstDisp.textContent = `And the Winner is 
            ${(playerScore>computerScore)? `Player with score of: `+ playerScore :
             `Computer with score of: `+ computerScore}`;
            playerScore=0;
            computerScore =0;
        }
    });
});

function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors']; 
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection , computerSelection){
    let message='';
    let winner; // player win - 1 , lose - 0, draw = 2
    if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        message = `It's a draw! ${playerSelection} and ${
            computerSelection} are the same!`;
            winner = 2;
    }
    else if(playerSelection.toUpperCase() == 'ROCK' &&
     computerSelection.toUpperCase() == 'SCISSORS' ||
      playerSelection.toUpperCase() == 'PAPER' &&
       computerSelection.toUpperCase() == 'ROCK' ||
        playerSelection.toUpperCase() == 'SCISSORS' &&
         computerSelection.toUpperCase() == 'PAPER'){
        message = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = 1;
    }
    else{
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = 0;
    }
    
    return [message,winner];
}

pickBtn.forEach((btn)=>{
  btn.addEventListener('transitionend',removeTransition);
});

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('clicked');
}