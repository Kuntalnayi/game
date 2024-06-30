let turn = 'X';
let isgameover = false;

const changeturn = () =>{
     return turn === 'X'?'0':'X';
}
const win = () =>{
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + 'won';
         isgameover = true;
        }
    })
     
}
let boxs = document.getElementsByClassName('box');
Array.from(boxs).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText =turn;
            turn = changeturn();
            win();
            if(!isgameover){

                 document.getElementsByClassName('info')[0].innerText = "turn " + turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
   let box = document.querySelectorAll('.text');
   Array.from(box).forEach(element=>{
     element.innerText = "";
   })
   turn = 'X';
   isgameover = false;
   document.getElementsByClassName('info')[0].innerText = 'Turn' + turn;
})