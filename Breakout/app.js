const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score')

const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWith = 560;
const boardHeight = 300;
let timeId;
let xDirection = 2;
let yDirection = 2;
let score = 0;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let currentBallPosition = ballStart;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

];

console.log(blocks[0]);

function addBlocks() {
    blocks.forEach((b) => {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = b.bottomLeft[0] + 'px'
        block.style.bottom = b.bottomLeft[1] + 'px'
        grid.appendChild(block);
    })

}

addBlocks();


const user = document.createElement('div');
user.classList.add('user');
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px';
grid.appendChild(user);


function userDraw() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

function ballDraw() {
    ball.style.left = currentBallPosition[0] + 'px';
    ball.style.bottom = currentBallPosition[1] + 'px';
}


function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                userDraw();
            }
            break;

        case 'ArrowRight':
            if (currentPosition[0] < (boardWith - blockWidth)) {
                currentPosition[0] += 10;
                userDraw();
            }
            break;

    }

}
document.addEventListener('keydown', moveUser);

const ball = document.createElement('div');
ball.classList.add('ball');
ballDraw();
grid.appendChild(ball);

function moveBall() {
    currentBallPosition[0] += xDirection;
    currentBallPosition[1] += yDirection;
    ballDraw();
    checkForCollisions();
}

timeId = setInterval(moveBall, 30);

function checkForCollisions() {
    blocks.forEach((block, i) => {
        if (
            (currentBallPosition[0] > block.bottomLeft[0] && currentBallPosition[0] < block.bottomRight[0]) &&
            ((currentBallPosition[1] + ballDiameter) > block.bottomLeft[1] && currentBallPosition[1] < block.topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1);
            changeDirection();
            score++;
            scoreDisplay.textContent = score;
        }
     
    })



    if (
        currentBallPosition[0] >= (boardWith - ballDiameter) ||
        currentBallPosition[1] >= (boardHeight - ballDiameter) ||
        currentBallPosition[0] <= 0
    ) {
        changeDirection();
    }

    if (currentBallPosition[1] <= 0) {
        clearInterval(timeId);
        scoreDisplay.textContent = 'You lost!';
        document.removeEventListener('keydown', moveUser);
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return;
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return;
    }
}