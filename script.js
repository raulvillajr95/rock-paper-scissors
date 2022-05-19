// random number between 1 and b
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

function computerPlay() {
  let computerChoice = randomNum(3)
  if (computerChoice == 1) {
    return 'Rock'.toLowerCase()
  } else if (computerChoice == 2) {
    return 'Paper'.toLowerCase()
  } else {
    return 'Scissors'.toLowerCase()
  }

}

function oneRoundRPS(playerSelection, computerSelection) {
  let playersChoice = playerSelection.toLowerCase()
  let computersChoice = computerSelection

  return `${playersChoice}, ${computersChoice}`
}

console.log(oneRoundRPS('RocK', computerPlay()))