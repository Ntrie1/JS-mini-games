const computerChoice = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let result;

possibleChoices.forEach(p => p.addEventListener('click', (e) => {
    e.preventDefault();
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        computerChoice.textContent = 'rock'
    } else if (randomNum == 2) {
        computerChoice.textContent = 'paper'
    }
    else {
        computerChoice.textContent = 'scissors'
    }
}

function getResult() {
    if (computerChoice.textContent == userChoice) {
        result = `it's a tie!`;
    } else if (computerChoice.textContent == 'rock' && userChoice == 'paper') {
        result = `you win!`
    } else if (computerChoice.textContent == 'rock' && userChoice == 'scissors') {
        result = `you lost :(`
    } else if (computerChoice.textContent == 'scissors' && userChoice == 'rock') {
        result = `you win!`
    } else if (computerChoice.textContent == 'scissors' && userChoice == 'paper') {
        result = `you lost :(`
    } else if (computerChoice.textContent == 'paper' && userChoice == 'scissors') {
        result = `you win!`
    } else if (computerChoice.textContent == 'paper' && userChoice == 'rock') {
        result = `you lost!`
    }

    console.log(computerChoice);
    console.log(userChoice);
    resultDisplay.textContent = result;

}