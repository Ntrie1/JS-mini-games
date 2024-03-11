const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let indexRandom = Math.floor(Math.random() * 9);
    let randomSquare = squares[indexRandom];

    randomSquare.classList.add('mole')
   
    hitPosition = randomSquare.id
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
         if (hitPosition == square.id) {
            result ++;
            score.textContent = result;
            hitPosition = null;
         }
    });
});

function moveMole() {
    let timeId = null;
    timeId = setInterval(randomSquare, 400)
}

moveMole();

