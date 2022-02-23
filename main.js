
const gameBoard = {
    //each "row" is the Y coordinate and each "column" is the X coordinate gameBoard.board[y][x];
    board: [
      ['', 'B', '','','','','',''],
      ['', '', 'b','','b','','',''],
      ['', '', '','r','','','',''],
      ['', '', '','','','','',''],
      ['', 'r', '','R','','','',''],
      ['b', '', 'B','','b','','b',''],
      ['', '', '','b','','b','','o'],
      ['', '', 'b','','b','','R',''],
      
    ],}
  
const baseBoard=gameBoard.board;
let blackTurn=true;
let firstClick=true;
let validClick=true;
  
function renderPieces(){
  //if row>column = 'r' inner html= <img src='https://www.pinclipart.com/picdir/big/72-729763_dots-clipart-red-circle-circle-png-download.png'
  
    gameBoard.board.forEach((row,idexY)=>{

    row.forEach((X,idexX)=>{
            let square= document.getElementById(`${idexY}-${idexX}`);
            if(X==='r'){
            

            // player2Piece.classList.add('red');
            square.innerHTML="<img src='https://www.pinclipart.com/picdir/big/72-729763_dots-clipart-red-circle-circle-png-download.png'>"
            // "<img src='https://www.pinclipart.com/picdir/big/72-729763_dots-clipart-red-circle-circle-png-download.png'>"
            }
            else if(X==='b')
            {
            // docume.getElementById(`${idexY}-${idexX}`);
            // player1Piece.classList.add('black');
            square.innerHTML="<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.medassurance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fblack-circle.png&f=1&nofb=1'>";
            // ©
            // "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.medassurance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fblack-circle.png&f=1&nofb=1'>";
            } 
            else if(X=='o')
            {
                square.innerHTML="<img src ='https://www.pngarts.com/files/3/Shooting-Target-PNG-Background-Image.png'>"
            }
            else if(X==='')
            {
                square.innerHTML="";
            }
            else if(X==='B')
            {
                square.innerHTML="<img src='https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d63d9911dccd0f9.png'>";
            }
            else if(X==='R')
            {
                square.innerHTML="<img src='https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/f3d2944135aa687.png'>";
            }
    })
})
}
renderPieces();


// function renderClick(evt){
//     // let clicked=document.getElementById('clickedId');
//     // clicked.classList.add('clicked');
//     // console.log(evt.target);
// }

//variables used to get clicked location on grid, clickedRow:X coordinate, clickedColumn=Y
// let clickedIdSplit=null;
let clickedId=null;
let clickedY=[];
let clickedX=[];
let clickedIdString=null;

function getClickedLocation (evt){  
    //caches box ID, X and Y coordinates.

    clickedIdString=evt.currentTarget.id.split('-');
    // console.log('position id: '+clickedIdString);
    clickedId=evt.currentTarget.id;
    clickedY=parseInt(clickedIdString[0]);
    clickedX=parseInt(clickedIdString[1]);
    console.log('X:'+clickedX+' Y: '+clickedY);
}

let prevClickedId=null;
let prevClickedY=[];
let prevClickedX=[];
selectedPieceType=null;
let selected=false;
function ToggleSelectPiece(){ //on first click checks if the location belongs to the current player, calls add prev click Function
    if(prevClickedId===clickedId){
        document.getElementById(clickedId).classList.remove('selected');
        removeOptions();
        prevClickedId=null;
        firstClick=true;
        selected=false;
    } else if(gameBoard.board[clickedY][clickedX]==='b' && blackTurn==true &&selected==false &&firstClick==true){
        if(prevClickedId==null){
            addPrevClick();
            selected=true;
            console.log(`prev clicked x:${prevClickedX} / prevclickedY: ${prevClickedY} // clickedX: ${clickedX} / clickedY: ${clickedY}`);
        } 

    } else if(gameBoard.board[clickedY][clickedX]==='B' && blackTurn==true &&selected==false &&firstClick==true){
        if(prevClickedId==null){
            addPrevClick();
            selected=true;
            console.log(`prev clicked x:${prevClickedX} / prevclickedY: ${prevClickedY} // clickedX: ${clickedX} / clickedY: ${clickedY}`);
        } 

    } else if (gameBoard.board[clickedY][clickedX]==='r' && blackTurn==false && selected==false && firstClick==true){
        if(prevClickedId==null){

            addPrevClick();
            selected=true;
            console.log(`prev clicked x:${prevClickedX} / prevclickedY: ${prevClickedY} // clickedX: ${clickedX} / clickedY: ${clickedY}`);

        } 
    }else if(gameBoard.board[clickedY][clickedX]==='R' && blackTurn==false &&selected==false &&firstClick==true){
        if(prevClickedId==null){
            addPrevClick();
            selected=true;
            console.log(`prev clicked x:${prevClickedX} / prevclickedY: ${prevClickedY} // clickedX: ${clickedX} / clickedY: ${clickedY}`);
        } 
        
    }
}

function addPrevClick(){ // used to highlight and chache prev click's info

    prevClickedId=clickedId;
    prevClickedX=clickedX;
    prevClickedY=clickedY;
    console.log('added prev click')
    document.getElementById(clickedId).classList.add('selected');
    selectedPieceType=gameBoard.board[clickedY][clickedX];
    firstClick= false;
}

let optionArrX=[];
let optionArrY=[];
// let captureArr=[];
function checkOptions(){
    // firstClick===false &&
    function moveUpLeft(){
        if(gameBoard.board[clickedY-1][clickedX-1] ==''){
            optionArrX.push(clickedX-1);
            optionArrY.push(clickedY-1);
        }
    }
    function moveUpRight(){
        if( gameBoard.board[clickedY-1][clickedX+1] =='' ){
            optionArrX.push(clickedX+1);
            optionArrY.push(clickedY-1);
        }
    }
    function moveDownLeft(){
        if(gameBoard.board[clickedY+1][clickedX+1] =='' ){
            //down and to the right
            optionArrX.push(clickedX+1);
            optionArrY.push(clickedY+1);
        }
    }
    function moveDownRight(){

        if(gameBoard.board[clickedY+1][clickedX-1] ==''){
            //moving down to the left
            optionArrX.push(clickedX-1);
            optionArrY.push(clickedY+1);
        }
    }
    function captureUpLeft(){
        if(gameBoard.board[clickedY-2][clickedX-2] ==''){
            optionArrX.push(clickedX-2);
            optionArrY.push(clickedY-2);
            // captureArr=[clickedY-2,clickedX-2]
        }
    }
    function captureUpRight(){
        if(gameBoard.board[clickedY-2][clickedX+2] ==''){
            optionArrX.push(clickedX+2);
            optionArrY.push(clickedY-2);
            // captureArr=[clickedY-2,clickedX-2]
        }
    }
    function captureDownRight(){
        if(gameBoard.board[clickedY+2][clickedX+2] ==''){
            optionArrX.push(clickedX+2);
            optionArrY.push(clickedY+2);
        }
    }
    function captureDownLeft(){
        if(gameBoard.board[clickedY+2][clickedX-2] ==''){
            optionArrX.push(clickedX-2);
            optionArrY.push(clickedY+2);
        }
    }
    if( blackTurn===true &&selectedPieceType=='b' && selected==true){ //black piece is moving forwards

        moveUpRight();
        moveUpLeft()
        //captures
        if(clickedY>1 && clickedY<=7){
            if(gameBoard.board[clickedY-1][clickedX-1] =='r' || gameBoard.board[clickedY-1][clickedX-1] =='R'){
                captureUpLeft();
            }//right side capture
            if(gameBoard.board[clickedY-1][clickedX+1] =='r' || gameBoard.board[clickedY-1][clickedX+1] =='R'){
                captureUpRight();
            }
        }
    } else if( blackTurn===true &&selectedPieceType==='B' && selected==true){//King black piece 
        //moving up
        if(clickedY>=1){
            moveUpRight();
            moveUpLeft()
        }
        //moving down
        if(clickedY<=6){
            moveDownRight();
            moveDownLeft();
        }

        //captures
        if(clickedY<=5 && clickedY>=0){
            // down left capture
            if(gameBoard.board[clickedY+1][clickedX-1] =='r' || gameBoard.board[clickedY+1][clickedX-1] =='R'){
                captureDownLeft();
            }// down right capture
            if(gameBoard.board[clickedY+1][clickedX+1] =='r' || gameBoard.board[clickedY+1][clickedX+1] =='R'){
                captureDownRight();
            }
        }
        if(clickedY>1 && clickedY<=7){
            //up left capture
            if(gameBoard.board[clickedY-1][clickedX-1] =='r'|| gameBoard.board[clickedY-1][clickedX-1] =='R'){
                captureUpLeft();
            }
            //up right capture
            if(gameBoard.board[clickedY-1][clickedX+1] =='r' || gameBoard.board[clickedY-1][clickedX+1] =='R' ){
                captureUpRight();
            }
        }
        //regular red piece

    } else if (blackTurn===false && selectedPieceType==='r' && selected===true){ //if piece is regular red
        //moves
        moveDownLeft();
        moveDownRight();
        //captures
        if(clickedY<=5 && clickedY>=0){
            //left side capture
            if(gameBoard.board[clickedY+1][clickedX-1] =='b' || gameBoard.board[clickedY+1][clickedX-1] =='B'){
                captureDownLeft();
            }//right side capture
            if(gameBoard.board[clickedY+1][clickedX+1] =='b' || gameBoard.board[clickedY+1][clickedX+1] =='B'){
                captureDownRight();
            }
        } 
    }else if(blackTurn===false && selectedPieceType==='R' && selected===true){//King Red Piece
        if(clickedY>=1){
            moveUpRight();
            moveUpLeft()
        }
        if(clickedY<=6){
            moveDownRight();
            moveDownLeft();
        }
        //captures
        if(clickedY<=5 && clickedY>=0){
            // down left capture
            if(gameBoard.board[clickedY+1][clickedX-1] =='b' || gameBoard.board[clickedY+1][clickedX-1] =='B'){
                captureDownLeft();
            }// down right capture
            if(gameBoard.board[clickedY+1][clickedX+1] =='b' || gameBoard.board[clickedY+1][clickedX+1] =='B'){
                captureDownRight();
            }
        }
        if(clickedY>1 && clickedY<=7){
            //up left capture
            if(gameBoard.board[clickedY-1][clickedX-1] =='b'|| gameBoard.board[clickedY-1][clickedX-1] =='B'){
                captureUpLeft();
            }
            //up right capture
            if(gameBoard.board[clickedY-1][clickedX+1] =='b' || gameBoard.board[clickedY-1][clickedX+1] =='B' ){
                captureUpRight();
            }
        }
        
    }
    
    console.log('optionArrX:'+optionArrX +'  optionArrY:'+optionArrY);
    modelOptions();
    // renderPieces();
}



function modelOptions(){
    for(i=0;i<optionArrY.length; i++){
        gameBoard.board[optionArrY[i]][optionArrX[i]]='o';

    }
    // renderPieces();
}

function removeOptions(){
    for(i=0;i<optionArrY.length; i++){
        gameBoard.board[optionArrY[i]][optionArrX[i]]='';
        // document.getElementById(`${optionArrY[i]}-${optionArrX[i]}`).innerHTML="";

    }
    optionArrY=[];
    optionArrX=[];
    // renderPieces();
}

let diffX=null;
(clickedX-prevClickedX);
let diffY=null;
function capturePiece(){
    let y1=prevClickedY;
    let x1=prevClickedX;
    diffX=(clickedX-x1);
    diffY=(clickedY-y1);
    console.log('capturePiece Test1-diffX:'+diffX);

    if(Math.abs(diffX)>1){
            for(i=0;i<=Math.abs(diffX); i++){
                console.log(`y1 =${y1} x1= ${x1} diffX=${diffX}`)
                // prevClickedX+(math.sign(diffX)*1)
                // gameBoard.board[optionArrY[i]][optionArrX[i]]='';
                // document.getElementById(`${prevClickedY+(Math.sign(diffY)*1)}-${prevClickedX+(Math.sign(diffX)*1)}`).innerHTML="";
                x1+=Math.sign(diffX);
                y1+=Math.sign(diffY);
                console.log(`y1 =${y1} x1= ${x1}`)
                gameBoard.board[y1][x1]='';
                x1+=Math.sign(diffX);
                y1+=Math.sign(diffY);
                console.log(`y1 =${y1} x1= ${x1}`)
                // x1+=Math.sign(diffX)
                // y1+=Math.sign(diffY)
                diffX=(clickedX-x1);
                diffY=(clickedY-y1);
            }
    }
    // renderPieces();
}


// function changePrevClick (){ //used in select piece function to de-select piece when changing selection
//     document.getElementById(prevClickedId).classList.remove('selected');
//     document.getElementById(clickedId).classList.add('selected');
//     prevClickedId=clickedId;
//     prevClickedX=clickedX;
//     prevClickedY=clickedY;
//     // selectedPieceType=gameBoard.board[clickedX][clickedY];
// }

function movePiece(evt){
    
        getClickedLocation(evt); 

        
        if(gameBoard.board[clickedY][clickedX]=='o'){
            capturePiece();
        // document.getElementById(prevClickedId).innerHTML='';
        let lastSpot=document.getElementById(prevClickedId)
        lastSpot.classList.remove('selected');
        lastSpot.innerHTML='';
        gameBoard.board[prevClickedY][prevClickedX]='';
        // gameBoard.board[clickedY][clickedX]=selectedPieceType;
        blackTurn=!blackTurn;
        firstClick=true;
        // capturePiece();
        if(selectedPieceType==='b' && clickedY==0){
            selectedPieceType='B';
        } else if(selectedPieceType=='r' && clickedY==7){
            selectedPieceType='R';
        }
        

        
        removeOptions();
        gameBoard.board[clickedY][clickedX]=selectedPieceType;
        selectedPieceType=null;
        selected=false;
        prevClickedId=null;
        // prevClickedX=null;
        // prevClickedY=null;
        // renderPieces();
        }

    
}

//adding event listener to all squares on grid
const boxes=document.querySelectorAll('.box');
boxes.forEach(box=> box.addEventListener('click',selectBox));

function selectBox(evt){
    getClickedLocation(evt);
     if(firstClick==true ||prevClickedId==clickedId){
        ToggleSelectPiece(evt);
        checkOptions();
    }
    else if(firstClick==false && clickedId!=prevClickedId && selected==true && gameBoard.board[clickedY][clickedX] =='o'){
    // capturePiece();
    movePiece(evt); 
    }
    renderPieces();
    console.log('first click:'+firstClick+'  blackTurn: ' + blackTurn);
    // console.log('currentTarget-classList: '+evt.currentTarget.classList);
    //   console.log('target value:'+evt.target.value);
    //   console.log('target-classList: '+evt.target.classList);


}














//     redraw: function () {
//       for (const rows of gameBoard.board) {
//         for (const row in rows) {
//           for (const col in [0, 1, 2, 3 , 4, 5, 6, 7]) {
//             const cellId = row + "-" + col;
  
//             // update the cell with value from the gameBoard
//             document.getElementById(cellId).innerText = gameBoard.board[row][col]
//           }
//         }
//       }
//     },
//   }
  
  
  
  // // class Knight{
  // //   constructor(name,position,typeConstraints){
  // //     this.name = Knight;
  // //     this.position = position;
  // //     this.typeConstraints= {
  
        
  // //     }
  // //   }