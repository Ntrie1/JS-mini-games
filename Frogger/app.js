const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76
const width = 9;
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog');

    switch (e.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0) currentIndex--;
            break;
        case 'ArrowUp':
            if (currentIndex - width >= 0) currentIndex -= width;
            break;
        case 'ArrowRight':
            if (currentIndex % width < width - 1) currentIndex++;
            break;
        case 'ArrowDown':
            if (currentIndex + width < width * width) currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add('frog');



}
document.addEventListener('keyup', moveFrog);