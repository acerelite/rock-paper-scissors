function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);

    switch(randomizer) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        default:
            return null;
    }
}


function playRound() {

    let computerChoice = getComputerChoice();
    let playerSelection = prompt('Enter choice: ').toLowerCase();

    if (playerSelection === "rock" && computerChoice === "paper") {
        console.log('You Lose! Paper beats Rock');
        return 'computer';

    } else if (playerSelection === "paper" && computerChoice === "scissor") {
        console.log('You Lose! Scissor beats Paper');
        return 'computer';

    } else if (playerSelection === "scissor" && computerChoice === "rock") {
        console.log('You Lose! Rock beats Scissor');
        return 'computer';

    } else if (playerSelection === "rock" && computerChoice === "scissor") {
        console.log('You Won! Rock beats Scissor');
        return 'player';

    } else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log('You Won! Paper beats Rock');
        return 'player';
        
    } else if (playerSelection === "scissor" && computerChoice === "paper") {
        console.log('You Won! Scissor beats Paper');
        return 'player';

    } else if (playerSelection === computerChoice) {
        console.log('It\'s a Tie!');
        return 'tie'
    } else {
        return 'Error on game'
    }
}

function result(playerScore, computerScore) {

    console.log('Player: ' + playerScore)
    console.log('Computer: ' + computerScore)
    if (playerScore > computerScore) {
        return 'Player Won!'
    } else if (playerScore < computerScore) {
        return 'Computer Score'
    } else {
        return 'It\'s a Tie.'
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {

        let roundWinner = playRound();
        if (roundWinner === "player") {
            playerScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }
    }
    
    console.log(result(playerScore, computerScore));
}



game();