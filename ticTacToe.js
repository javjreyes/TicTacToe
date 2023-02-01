const ticTacToe = (() =>{
    let player1Score=0;
    let player2Score=0;
    let turnTracker=0;
    let whosTurn="player1";

    let gameBoard=[["","",""],["","",""],["","",""]];

    const turn = cellChoice => {
        let choice;
        if(whosTurn=="player1"){
            choice="X";
            whosTurn="player2";
        }
        else{
            choice="O";
            whosTurn="player1";
        }
        cellChoice.innerText=choice;
        cellChoice.onclick="";

    }
    return{
        turn
    };
})();