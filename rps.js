function numberGenerator(max) {
    let num = Math.floor((Math.random() * max) + 1);
    return num;
};

function getComputerChoice() {
let randomNum = numberGenerator(3)
if (randomNum === 3){
    return "rock";
} else if (randomNum === 2){
    return "paper";
} else if (randomNum === 1){
    return "scissors";
}
};

const handleButtonClick = (event) => {
  console.log(playRound(event.target.value, getComputerChoice()));
}

function playRound(playerSelection, computerSelection) {
if (computerSelection === playerSelection){
    return "tie";
} else if (playerSelection === 'rock'){
    if (computerSelection === 'paper') {
      return "computer";
    } else {
      return "player";
    }
} else if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      return "player";
    } else {
      return "computer";
    }
} else if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      return "computer";
    } else {
      return "player";
    }
}
};

// console.log(playRound(playerSelection, computerSelection));


// function game(playRound){
// let oneWinner = {};
// for (let i = 0 ; i < 5; i++){
//     let computerSelection = getComputerChoice();
//     let winnerForEachRound = playRound(playerSelection, computerSelection);
//     if (oneWinner[winnerForEachRound]){
//         oneWinner[winnerForEachRound]++;
//     } else {
//         oneWinner[winnerForEachRound] = 1;
//     }
//     }
// delete oneWinner["tie"];
// let values = Object.values(oneWinner);
// let max = Math.max(...values);

// return oneWinner["player"] === oneWinner["computer"]
//     ? "tie"
//     : Object.keys(oneWinner).find((key) => oneWinner[key] === max);
// }

// create three buttons for rock, paper, scissors
// add event listener to the buttons that call playRound

// console.log(game(playRound));