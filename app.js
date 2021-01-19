const boxes = Array.from(document.getElementsByClassName('box'));
const playtext = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [null, null, null, null, null, null ,null, null, null];
const O = "O";
const X = "X";
let currentPlayer = O;

console.log(boxes);
const drawBoard = () => {
    boxes.forEach((box,index)=>{

        styleString ='border:3px solid var(--purple);';
    box.style = styleString;
    box.addEventListener('click',boxClicked);
    });
};

const boxClicked = (e)=> {
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerHTML = currentPlayer;

        if (playerWon()){
            playtext.innerHTML=currentPlayer+' has won!';
            return;
        }
        currentPlayer = currentPlayer == O?X:O;
    }
}
const playerWon = ()=>{
    if (spaces[0] == currentPlayer){
        if(spaces[1]==currentPlayer && spaces[2]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
        if(spaces[3]==currentPlayer && spaces[6]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
        if(spaces[4]==currentPlayer && spaces[8]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
    }
    if (spaces[8] == currentPlayer){
        if(spaces[2]==currentPlayer && spaces[5]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
        if(spaces[7]==currentPlayer && spaces[6]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
    }
    if (spaces[3] == currentPlayer){
        if(spaces[4]==currentPlayer && spaces[5]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
    }
};
const Rest = ()=>{
    spaces.forEach((space,index)=>{
        spaces[index] = null;
    });
    boxes.forEach((box)=>{
        box.innerText='';
    });
    playtext.innerText ='Start Game';
}
restartBtn.addEventListener('click',Rest);

drawBoard();