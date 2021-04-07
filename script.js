// Game setup
let board = document.getElementById('game-board');
let boardSize = 9;
let squares = [];
let reset = document.getElementById('reset');
let gameStatus = document.getElementById('game-status');

// reset
reset.addEventListener('click', resetBoard)

function resetBoard(ev) {
    ticTacToe();
}

// Game Instantiator
function ticTacToe() {
    if (squares) squares.forEach(square => square.remove())
    let options = { true: 'x', false: 'o' };
    let flipCoin = [true, false][Math.round(Math.random())];
    let turn = flipCoin;

    // status init
    gameStatus.innerHTML = `<b>${options[turn]}</b> begins the game`

    // Square Template
    let squareTemplate = document.createElement('button')
    squareTemplate.classList.add('square');

    // Square Event Handler
    function squareLogic(ev) {
        if (!ev.target.innerText) {
            ev.target.innerText = options[turn];
            turn = !turn;
            gameStatus.innerHTML = `It's <b>${options[turn]}</b> turn`
        } else {
            alert('square already in use');
        }
        console.log(ev.target.innerText);
    }

    // Square element creator
    for (let i = 0; i < boardSize;) {
        let square = squareTemplate.cloneNode();
        square.id = ++i;
        square.addEventListener('click', squareLogic);
        board.appendChild(square);
        squares.push(square);
    }
}

ticTacToe(board);