const grid = document.querySelector('.grid');
const resultDisplay = document.getElementById('result')
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invaderId;
let goingRight = true;
let alienRemoved = [];

for (let i = 0; i < 255; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
};

const squares = Array.from(document.querySelectorAll('.grid div'));

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];


function draw() {
    alienInvaders.forEach((invader, i) => {
        if(!alienRemoved.includes(i)){
            squares[invader].classList.add('invader');
        }
    })
}

draw();

function remove() {
    alienInvaders.forEach((invader) => {
        squares[invader].classList.remove('invader');
    })
}


squares[currentShooterIndex].classList.add('shooter');



function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');

    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
            break;
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
            break;
    }

    squares[currentShooterIndex].classList.add('shooter');

}

document.addEventListener('keydown', moveShooter);


function moveInvadors() {
    const leftEdge = alienInvaders[0] % width == 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width == width - 1;
    remove();

    if (rightEdge && goingRight) {
        alienInvaders.forEach((invader, i) => {
            alienInvaders[i] += width - 1;
            direction = -1;
            goingRight = false;
        })
    }

    if (leftEdge && !goingRight) {
        alienInvaders.forEach((invader, i) => {
            alienInvaders[i] += width - 1;
            direction = 1
            goingRight = true;
        })
    }

    alienInvaders.forEach((invader, i) => {
        alienInvaders[i] += direction;
    })
    draw();

    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultDisplay.textContent = 'game over';
        clearInterval(invaderId)
    }


    alienInvaders.forEach((invader, i) => {
        if (alienInvaders[i] > squares.length) {
            resultDisplay.textContent = 'game over';
            clearInterval(invaderId);
        }
    });

    if(alienRemoved.length == alienInvaders.length){
        resultDisplay.textContent = 'You won!'
    }

}
invaderId = setInterval(moveInvadors, 500);


function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        if(squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId);

            const alienRemoval = alienInvaders.indexOf(currentLaserIndex)
            alienRemoved.push(alienRemoval);

        }
    }

    switch (e.key) {
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)
