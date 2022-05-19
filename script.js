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

  if (playersChoice == computersChoice) {
    return `You tied! ${playersChoice} equals ${computersChoice}`
  } else {
    if (playersChoice == 'rock' && computersChoice == 'paper') {
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'rock' && computersChoice == 'scissors') {
      return `You Win! ${playersChoice} beats ${computersChoice}`
    } else if (playersChoice == 'paper' && computersChoice == 'rock') {
      return `You Win! ${playersChoice} equals ${computersChoice}`
    } else if (playersChoice == 'paper' && computersChoice == 'scissors') {
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'scissors' && computersChoice == 'rock') {
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'scissors' && computerSelection == 'paper') {
      return `You Win! ${playersChoice} beats ${computersChoice}`
    }
  }
}

console.log(oneRoundRPS('RocK', computerPlay()))