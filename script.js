const boxes = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector("#msg");
const newButton = document.querySelector(".new");
const msg_container = document.querySelector(".msg-container");
let turn = true;
const winpatterns = [
    [ 0, 1, 2],
    [ 0, 3, 6],
    [ 0, 4, 8],
    [ 1, 4, 7],
    [ 2, 5, 8],
    [ 2, 4, 6],
    [ 3, 4, 5],
    [ 6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
       console.log("box was clicked");
       if(turn){
        box.innerText = "X";
        turn = false;
       } else {
        box.innerText = "0";
        turn = true;
       }
       box.disabled = true;

       winner();
    });
});

resetBtn.addEventListener("click", () => {
    turn = true;
    enableBoxes();
});
newButton.addEventListener("click", () => {
    turn = true;
    enableBoxes();
    msg_container.classList.add("display");
});

const winner = () => {
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (win) => {
    msg.innerHTML = "Congratulations, winner is " + win;
    msg_container.classList.remove("display");
}