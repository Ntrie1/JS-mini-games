const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;

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
            result++;
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

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert(`Game over! Your final socre is ${result}`)
        result = 0;
        score.textContent = result;
    }
}

let countDownTimerId = setInterval(countDown, 1000)

