const grid = document.querySelector('.grid');

const blockWidth = 100;
const blockHeight = 20;
const boardWith = 560;

const userStart = [230, 10];
let currentPosition = userStart;

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
grid.appendChild(ball);