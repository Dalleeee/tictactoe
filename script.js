const gameBoard = (() => {
    const gameboard = ["", "", "", "", "", "", "", "", ""];

    const Player = (name) => {
        return name;
    }

    function pickPlayer(name) {
        name = prompt("What's your name, Player 1?");
        const Player1 = Player(name);
        return Player1;
    }

    function pickPlayer2(name) {
        name2 = prompt("Player 2, what is your name?");
        const Player2 = Player(name2);
        return Player2;
    }

    let Player1 = pickPlayer();
    let Player2 = pickPlayer2();
    let playerTurn = 1;
    const container = document.getElementById('container');
    
    const turns = (() => {
        container.addEventListener("click", function() {
            if (playerTurn === 1) { 
                return playerTurn = 2;
            }
            else {
                return playerTurn = 1;
            }
        });
    })();

    function checkWinner() {
        const boardPieceList = [];
        const boardPieces = document.getElementsByClassName('board-piece');
        for (let i = 0; i < boardPieces.length; i++) {
            boardPieceList[i] = boardPieces[i].innerHTML;
        }
        
        function displayWinner1() {
            document.getElementById('display-winner').innerHTML = "Games over " + Player1 + " won! Reset to play again!";
            }

        function displayWinner2() {
            document.getElementById('display-winner').innerHTML = "Games over " + Player2 + " won! Reset to play again!";
            }

        if (boardPieceList[0] == boardPieceList[3] && boardPieceList[0] == boardPieceList[6]) {
            if (boardPieceList[0] === "X" && boardPieceList[3] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[0] === "O" && boardPieceList[3] === "O") {
                displayWinner2();
            }
        }
        else if (boardPieceList[1] == boardPieceList[4] && boardPieceList[1] == boardPieceList[7]) {
            if (boardPieceList[1] === "X" && boardPieceList[4] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[1] === "O" && boardPieceList[4] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[2] == boardPieceList[5] && boardPieceList[2] == boardPieceList[8]) {
            if (boardPieceList[2] === "X" && boardPieceList[5] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[2] === "O" && boardPieceList[5] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[0] == boardPieceList[1] && boardPieceList[0] == boardPieceList[2]) {
            if (boardPieceList[0] === "X" && boardPieceList[2] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[0] === "O" && boardPieceList[2] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[3] == boardPieceList[4] && boardPieceList[3] == boardPieceList[5]) {
            if(boardPieceList[3] === "X" && boardPieceList[4] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[3] === "O" && boardPieceList[4] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[6] == boardPieceList[7] && boardPieceList[6] == boardPieceList[8]) {
            if (boardPieceList[6] === "X" && boardPieceList[7] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[6] === "O" && boardPieceList[7] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[0] == boardPieceList[4] && boardPieceList[0] == boardPieceList[8]) {
            if (boardPieceList[0] === "X" && boardPieceList[4] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[0] === "O" && boardPieceList[4] === "O") {
                displayWinner2();
            }
        }
        if (boardPieceList[2] == boardPieceList[4] && boardPieceList[2] == boardPieceList[6]) {
            if (boardPieceList[2] === "X" && boardPieceList[4] === "X") {
                displayWinner1();
            }
            else if (boardPieceList[2] === "O" && boardPieceList[4] === "O") {
                displayWinner2();
            }
        }
    }

    const gameDisplay = (() => {
        for (i = 0; i < 9; i++) {
            const boardPiece = document.createElement('div');
            boardPiece.innerHTML = gameboard[i];
            boardPiece.classList.add('board-piece');
            boardPiece.addEventListener("click", function() {
                if (boardPiece.textContent === "" && playerTurn === 1) {
                    boardPiece.textContent = "X";
            }
                else if (boardPiece.textContent === "" && playerTurn === 2){
                    boardPiece.textContent = "O";
            }
            checkWinner();
            });
            container.appendChild(boardPiece);
        }
    })(); 

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener("click", reset);

    function reset() {
        location.reload();
    }
    
    return {
        gameboard,
        Player,
    };
})();