const boxes = Array.from(document.getElementsByClassName('box'));
const playtext = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = ['X', 'X', 'X', null, null, null ,'O','O', 'O'];
const O = "O";
const X = "X";
let currentPlayer = null;

console.log(boxes);
const drawBoard = () => {
    boxes.forEach((box,index)=>{

        styleString ='border:3px solid var(--purple);';
    box.style = styleString;
    box.addEventListener('click',boxClicked);
    });
};
const boxClicked = (e)=> {
    let counter = 1;
    const id = e.target.id;
    if(!spaces[id]){
        if(currentPlayer!=null){
            spaces.forEach((space,index)=>{
                if (spaces[index]==currentPlayer)
                    counter++;
            });
            if (counter<=3){
                console.log(counter);
        spaces[id]=currentPlayer;
        e.target.innerHTML = currentPlayer;

        if (playerWon()){
            playtext.innerHTML=currentPlayer+' has won!';
            playtext.style.font="italic bold 100px arial,serif";
            return;
        }
        currentPlayer = currentPlayer == O?X:O;
    }
    }
    }
    else {
        currentPlayer = spaces[id];
        spaces[id] = null;
        e.target.innerHTML=' ';
    }
}
const playerWon = ()=>{
    if (spaces[0] == currentPlayer){
        if(spaces[1]==currentPlayer && spaces[2]==currentPlayer){
            return true;
        }
        if(spaces[3]==currentPlayer && spaces[6]==currentPlayer){
            return true;
        }
        if(spaces[4]==currentPlayer && spaces[8]==currentPlayer){
            return true;
        }
    }
    if (spaces[8] == currentPlayer){
        if(spaces[2]==currentPlayer && spaces[5]==currentPlayer){
            return true;
        }
        if(spaces[7]==currentPlayer && spaces[6]==currentPlayer){
            return true;
        }
    }
    if (spaces[3] == currentPlayer){
        if(spaces[4]==currentPlayer && spaces[5]==currentPlayer){
            console.log('${currentPlayer}wins on the left');
            return true;
        }
    }
    if (spaces[2] == currentPlayer){
        if(spaces[4]==currentPlayer && spaces[6]==currentPlayer){
            return true;
        }
    }
};
const Rest = ()=>{
    restSpaces = ['X', 'X', 'X', null, null, null ,'O','O', 'O'];
    spaces.forEach((space,index)=>{
        spaces[index] = restSpaces[index];
    });
    boxes.forEach((box,index)=>{
        box.innerText=restSpaces[index];
    });

    playtext.style.font="bold 54px arial,serif";
    playtext.innerText ='Start Gam';
}
restartBtn.addEventListener('click',Rest);

drawBoard();
