const grid = document.querySelector('.grid');

const blockWidth = 100
const blockHeight = 20

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
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
    new Block(10, 270),
   
];

console.log(blocks[0]);

function addBlocks() {
    blocks.forEach((b) => {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = b.bottomLeft[0] + 'px'
        block.style.bottom = b.bottomLeft[1] +'px'
        grid.appendChild(block);
    })

}

addBlocks();