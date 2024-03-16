const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76
const width = 9;
function moveFrog(e) {

    switch (e.key) {
        case 'ArrowLeft':
            console.log('left');
            currentIndex --;
            break;
        case 'ArrowUp':
            console.log('up');
            currentIndex -= width;
            break;
        case 'ArrowRight':
            console.log('r');
            currentIndex ++;
            break;
        case 'ArrowDown':
            console.log('down');
            currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add('frog');

}
document.addEventListener('keyup', moveFrog);