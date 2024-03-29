document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        // Add the remaining winning arrays here
    ];

    function checkBoard() {
        winningArrays.forEach(array => {
            const [index1, index2, index3, index4] = array;
            const square1 = squares[index1];
            const square2 = squares[index2];
            const square3 = squares[index3];
            const square4 = squares[index4];

            // Check if all squares have the class of player-one
            if (square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')) {
                result.innerHTML = 'Player One Wins!';
            }

            // Check if all squares have the class of player-two
            if (square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')) {
                result.innerHTML = 'Player Two Wins!';
            }
        });
    }

    squares.forEach((square, i) => {
        square.onclick = () => {
            // If the square below your current square is taken, you can go on top of it
            if (squares[i + 7] && squares[i + 7].classList.contains('taken') && !square.classList.contains('taken')) {
                if (currentPlayer == 1) {
                    square.classList.add('taken');
                    square.classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer == 2) {
                    square.classList.add('taken');
                    square.classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                }
            } else {
                alert('Cannot go here.');
            }
            checkBoard();
        };
    });
});
