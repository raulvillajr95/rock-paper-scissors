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
function game(choice) {
  for (let i = 1; i < 6; i++) {
    console.log(oneRoundRPS(choice))
  }
  if (playerCnt > computerCnt) {
    return `You Win! ${playerCnt} to ${computerCnt}`
  } else if (computerCnt > playerCnt) {
    return `You Lose! ${playerCnt} to ${computerCnt}`
  } else {
    return `You Tied! ${playerCnt} to ${computerCnt}`
  }
}

//console.log(game())

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')

let div = document.querySelector('.results')

rock.addEventListener('click', function() {
  let para = document.createElement('p')
  para.textContent = oneRoundRPS('rock')
  div.appendChild(para)

  //game()
})
paper.addEventListener('click', function() {
  let para = document.createElement('p')
  para.textContent = oneRoundRPS('paper')
  div.appendChild(para)

  //game()
})
scissors.addEventListener('click', function() {
  let para = document.createElement('p')
  para.textContent = oneRoundRPS('scissors')
  div.appendChild(para)
  
  //game()
})