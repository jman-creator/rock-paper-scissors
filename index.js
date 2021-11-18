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
    
    button.addEventListener('click', e => handleclick(e));
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
container.insertBefore(result, buttonsDiv)

playerScore.innerText = playerPoints;
computerScore.innerText = computerPoints;
roundInfo.innerText = "Choose your weapon";


function handleclick(e) {

    const btn = e.target;
    playRound(btn.id, computerPlay());

    btn.classList.add('click');
    setTimeout(() => btn.classList.remove('click'), 150);
}

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
                                "This round is a draw. Choose again to start anew";

    }
}