const ticTacToe = (() =>{
    let player1Score=0;
    let player2Score=0;
    let turnTracker=0;
    let whosTurn="player 1";

    let gameBoard=[[null, null, null],[null, null, null],[null, null, null]];

    const turn = cellChoice => {
        let choice;
        if(whosTurn=="player 1"){
            choice="X";
        }
        else{
            choice="O";
        }
        
        
        let cellX=cellChoice.getAttribute("data-cellx");
        let cellY=cellChoice.getAttribute("data-celly");
        console.log({cellX},{cellY});

        gameBoard[Number(cellX)][Number(cellY)]=choice;
        console.log("gameBoard value: "+gameBoard[Number(cellX)][Number(cellY)]);

        cellChoice.innerText=choice;
        cellChoice.onclick="";

        turnTracker+=1;
        let won=checkWin();

        if(won){
            console.log(whosTurn+" wins")
        }

        if(whosTurn=="player 1"){
            whosTurn="player 2";
        }
        else{
            whosTurn="player 1";
        }

    }
    
    const checkWin = () =>{
        let win=false;
        if(turnTracker>=5){
            for(x=0; x<3;x++){
                if(gameBoard[x][0]==gameBoard[x][1] && gameBoard[x][1]==gameBoard[x][2] && gameBoard[x][0]!=null){
                    console.log("Game Won by vert");
                    win=true;
                    break;
                }
            }
        
            for(y=0; y<3; y++){
                if(gameBoard[0][y]==gameBoard[1][y] && gameBoard[1][y]==gameBoard[2][y] && gameBoard[0][y]!=null){
                    console.log("Game Won by hori");
                    win=true;
                    break;
                }
            }

            if(gameBoard[0][0]==gameBoard[1][1] && gameBoard[1][1]==gameBoard[2][2] && gameBoard[0][0]!=null){
                console.log("Game Won by diag");
                win=true;
            }
            else if(gameBoard[2][0]==gameBoard[1][1] && gameBoard[1][1]==gameBoard[0][2] &&gameBoard[2][0]!=null){
                console.log("Game Won by diag");
                win=true;
            }
        }
        if(turnTracker==9){
            //gameOver
            console.log("Game Over: Nine Turns");
        }

        return win;
    }
    return{
        turn
    };
})();