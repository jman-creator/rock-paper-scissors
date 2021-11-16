const selections = ['rock', 'paper', 'scissors'];

function computerPlay() {

    const randnum = Math.floor(Math.random() * 3);

    switch (randnum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    
    playerSelectionIndex = selections.indexOf(playerSelection);
    computerSelectionIndex = selections.indexOf(computerSelection);

    const diff = playerSelectionIndex - computerSelectionIndex;
    
    if (diff > 0) {
        if (diff == 2) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return 0;
        }
        
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (diff < 0) {
        if (diff == -2) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        }
            
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
    else {
            console.log(`Draw! You both selected ${playerSelection}`);
            return -1;
        }
}

function game() {
    
    let scores = {
        player: 0,
        computer: 0
    }

    // function getWinner(winStat) {
        
    // }
    
    for (let i = 0; i < 5; i++) {
        
        let choice = "";
        
        while (selections.indexOf(choice.toLowerCase()) < 0)
        choice = prompt("Enter rock, paper or scissors");

        let winStat = playRound(choice, computerPlay());
    
        winStat >= 0 ?
        (winStat ? scores.player++ : scores.computer++) :
        null;

    }

    console.log(
        scores.player != scores.computer ?
        (scores.player > scores.computer ? `You won this round: ${scores.player} ${scores.computer}` :
        `You lost this round: ${scores.player} ${scores.computer}`) :
        `This round is a draw: ${scores.player} ${scores.computer}`
    );
}

game();