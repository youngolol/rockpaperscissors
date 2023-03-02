function numberGenerator(max) {
  let num = Math.floor(Math.random() * max + 1);
  return num;
}

function getComputerChoice() {
  let randomNum = numberGenerator(3);
  if (randomNum === 3) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 1) {
    return "scissors";
  }
}

let player_score = 0;
let computer_score = 0;
let tie_score = 0;

const handleButtonClick = (event) => {
  let computerSelection = getComputerChoice();
  let playRoundResult = playRound(event.target.value, computerSelection);
  if (playRoundResult === "player") {
    player_score++;
    document.getElementById(
      "player_score"
    ).innerText = `Player ${player_score}`;
  } else if (playRoundResult === "computer") {
    computer_score++;
    document.getElementById(
      "computer_score"
    ).innerText = `Computer ${computer_score}`;
  } else if (playRoundResult === "tie") {
    tie_score++;
    document.getElementById("tie_score").innerText = `Tie ${tie_score}`;
  }
  document.getElementById(
    "result_player"
  ).innerText = `Player: ${event.target.value}`;
  document.getElementById(
    "result_computer"
  ).innerText = `Computer: ${computerSelection}`;
};

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else {
      return "computer";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

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
