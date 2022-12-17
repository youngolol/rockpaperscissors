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
} else {
    console.log('handsome')
    return "handsome";
}
}

const playerSelection = window.prompt('choice: ').toLowerCase();

function playRound(playerSelection, computerSelection) {
if (computerSelection === 3){
    return "tie";
} else if (computerSelection === 2){
    return "computer";
} else if (computerSelection === 1){
    return "player";
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