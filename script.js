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

function oneRoundRPS(choice) {
  let playersChoice = choice
  let computersChoice = computerPlay()

  if (playersChoice == computersChoice) {
    return `You tied! ${playersChoice} equals ${computersChoice}`
  } else {
    if (playersChoice == 'rock' && computersChoice == 'paper') {
      computerCnt += 1
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'rock' && computersChoice == 'scissors') {
      playerCnt += 1
      return `You Win! ${playersChoice} beats ${computersChoice}`
    } else if (playersChoice == 'paper' && computersChoice == 'rock') {
      playerCnt += 1
      return `You Win! ${playersChoice} beats ${computersChoice}`
    } else if (playersChoice == 'paper' && computersChoice == 'scissors') {
      computerCnt += 1
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'scissors' && computersChoice == 'rock') {
      computerCnt += 1
      return `You Lose! ${computersChoice} beats ${playersChoice}`
    } else if (playersChoice == 'scissors' && computersChoice == 'paper') {
      playerCnt += 1
      return `You Win! ${playersChoice} beats ${computersChoice}`
    }
  }
}

let playerCnt = 0;
let computerCnt = 0;

let canYouPlay = true;
function game() {
  // if (playerCnt > 5 || computerCnt > 5 || (playerCnt == 5 && computerCnt == 5)) {
  //   return ''
  // }
  if (playerCnt == 5 || computerCnt == 5) {
    if (playerCnt == 5 && playerCnt > computerCnt) {
      canYouPlay = false;
      return `You Win! ${playerCnt} to ${computerCnt}`
    } else if (computerCnt == 5 && computerCnt > playerCnt) {
      canYouPlay = false;
      return `You Lose! ${playerCnt} to ${computerCnt}`
    }
  }
}

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')

let computer = document.querySelector('.computer')
let player = document.querySelector('.player')
let endgame = document.querySelector('.endgame')

let div = document.querySelector('.results')

rock.addEventListener('click', function() {
  if (canYouPlay) {
    div.textContent = `Gameplay: ${oneRoundRPS('rock')}`

    computer.textContent = `PC: ${computerCnt}`
    player.textContent = `Player: ${playerCnt}`

    endgame.textContent = game()
  }
})
paper.addEventListener('click', function() {
  if (canYouPlay) {
    div.textContent = `Gameplay: ${oneRoundRPS('paper')}`

    computer.textContent = `PC: ${computerCnt}`
    player.textContent = `Player: ${playerCnt}`
    
    endgame.textContent = game()
  }
})
scissors.addEventListener('click', function() {
  if (canYouPlay) {
    div.textContent = `Gameplay: ${oneRoundRPS('scissors')}`

    computer.textContent = `PC: ${computerCnt}`
    player.textContent = `Player: ${playerCnt}`
    
    endgame.textContent = game()
  }
})