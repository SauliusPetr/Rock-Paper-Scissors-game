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

function game(){
    let playerScore=0;
    let computerScore =0;
    let results;

    for(let i = 0; i < 5; i++){
        results = playRound(prompt('Enter rock, paper or scissors'),getComputerChoice());
        console.log(results[0]);
        switch(results[1]){
            case 1:
                playerScore ++;
                break;
            case 0:
                computerScore ++;
                break;
        }
        
        console.log(`The score is:\n user:${playerScore}\n computer:${computerScore}`);
    }

    if(playerScore == computerScore) 
        console.log(`The final result is a draw!\n user:${playerScore}\n computer:${computerScore}`);
    if(playerScore > computerScore) 
        console.log(`You win the game!\n user:${playerScore}\n computer:${computerScore}`);
    if(playerScore < computerScore) 
        console.log(`You lose the game!\n user:${playerScore}\n computer:${computerScore}`);
}
