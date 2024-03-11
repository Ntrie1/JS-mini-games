const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let indexRandom = Math.floor(Math.random() * 9);
    let randomPosition = squares[indexRandom];

    randomPosition.classList.add('mole')
   
    console.log(randomPosition);
}

randomSquare();