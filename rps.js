function numberGenerator(max) {
    let num = Math.floor((Math.random() * max) + 1);
    console.log(num)
    return num;
};

function getComputerChoice() {
let randomNum = numberGenerator(3)
if (randomNum === 3){
    console.log('rock')
    return 3;
} else if (randomNum === 2){
    console.log('paper')
    return 2;
} else if (randomNum === 1){
    console.log('scissors')
    return 1;
}
}

const playerSelection = window.prompt('choice: ').toLowerCase();

function playRound(playerSelection, computerSelection) {
if (computerSelection === 3 && playerSelection === 'rock'){
    return "tie";
} else if (computerSelection === 2 && playerSelection === 'rock'){
    return "computer";
} else if (computerSelection === 1 && playerSelection === 'rock'){
    return "player";
} else if (computerSelection === 3 && playerSelection === 'paper'){
    return "player";
} else if (computerSelection === 2 && playerSelection === 'paper'){
    return "tie";
} else if (computerSelection === 1 && playerSelection === 'paper'){
    return "computer";
} else if (computerSelection === 3 && playerSelection === 'scissors'){
    return "computer";
} else if (computerSelection === 2 && playerSelection === 'scissors'){
    return "player";
} else if (computerSelection === 1 && playerSelection === 'scissors'){
    return "tie";
}
}

// console.log(playRound(playerSelection, computerSelection));


function game(playRound){
let results = []
for (let i = 0 ; i < 5; i++){
    let computerSelection = getComputerChoice();
    results.push(playRound(playerSelection, computerSelection))
}
return results;
}

console.log(game(playRound));