const selections = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;
let winner = false;

const container = document.querySelector('.container');
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');

const buttons = selections.map(option => {

    let button = document.createElement('button');
    button.setAttribute('id', option);
    button.innerText = option.toUpperCase();
    buttonsDiv.appendChild(button);

    return button;
});

container.appendChild(buttonsDiv);

buttons.forEach(button => {
    
    button.addEventListener('click', e => {
        
        playRound(e.target.id, computerPlay());
    });
});

const result = document.createElement('div');
result.classList.add('result');

const scores = document.createElement('div');
scores.classList.add('scores');

const playerScore = document.createElement('div');
playerScore.classList.add('player-score');

const computerScore = document.createElement('div');
computerScore.classList.add('computer-score');

const roundInfo = document.createElement('div');
roundInfo.classList.add('round-info');

scores.append(playerScore, computerScore);
result.appendChild(roundInfo);
result.appendChild(scores);
container.appendChild(result);

playerScore.innerText = playerPoints;
computerScore.innerText = computerPoints;
roundInfo.innerText = "Choose your weapon";

function computerPlay() {

    const randnum = Math.floor(Math.random() * 3);

    switch (randnum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (winner) {
        playerPoints = computerPoints = 0;
        playerScore.innerText = playerPoints;
        computerScore.innerText = computerPoints;

        winner = false;
    }
    
    playerSelectionIndex = selections.indexOf(playerSelection);
    computerSelectionIndex = selections.indexOf(computerSelection);

    const diff = playerSelectionIndex - computerSelectionIndex;
    
    if (diff > 0) {

        if (diff == 2) {
            computerScore.innerText = ++computerPoints;
            roundInfo.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore.innerText = ++playerPoints;
            roundInfo.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (diff < 0) {

        if (diff == -2) {
            playerScore.innerText = ++playerPoints;
            roundInfo.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            computerScore.innerText = ++computerPoints;
            roundInfo.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;    
        }
    }
    else {
            roundInfo.innerText = `Draw! You both selected ${playerSelection}`;
        }


    if (playerPoints === 5) {

        winner = true;
        const winMessage = "You won this round! Make another selection to start a new round";
        const lossMessage = "You lost this round. Choose again to start anew";
        roundInfo.innerText = playerPoints != computerPoints ?
                                (playerPoints > computerPoints ? winMessage : lossMessage) :
                                "This round is a draw";

    }
}

// function game() {
    

//     function getWinner(winStat) {
    
//     }
    
//     for (let i = 0; i < 5; i++) {
        
//         let choice = "";
        
//         while (selections.indexOf(choice.toLowerCase()) < 0)
//         choice = prompt("Enter rock, paper or scissors");
    
//         let winStat = playRound(choice, computerPlay());
    
//         winStat >= 0 ?
//         (winStat ? scores.player++ : scores.computer++) :
//         null;
//     }


// }

// game();