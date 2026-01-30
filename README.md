# Tic-Tac-Toe
A fully functional Tic-Tac-Toe game developed using HTML, CSS, and JavaScript.
JavaScript file controls the entire gameplay logic of the Tic-Tac-Toe game. It manages player turns, detects winners, handles button clicks, and resets the game.

## DOM Element Selection
```
const boxes = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector("#msg");
const newButton = document.querySelector(".new");
const msg_container = document.querySelector(".msg-container");
const msg_container = document.querySelector(".msg-container");
```

- boxes → Selects all game cells (buttons) of the Tic-Tac-Toe board

- resetBtn → Resets the current game

- msg → Displays the winner message

- newButton → Starts a new game after a winner is declared

- msg_container → Container that shows or hides the result message

## Turn Management
```
 let turn = true;
```

- true → Player X's turn

- false → Player O's turn

- The turn switches after every valid click.


## Winning Patterns
```
const winpatterns = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
];
```
**These arrays represent all possible winning combinations:**

- Horizontal rows

- Vertical columns

- Diagonals

**Each number refers to the index of a box in the board.**

## Handling Box Clicks
```
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
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
```
**What happens when a box is clicked:**

1. Checks whose turn it is

2. Inserts "X" or "O" into the clicked box

3. Disables the box to prevent re-clicking

4. Calls the winner() function to check for a win

## Reset & New Game Buttons
```
resetBtn.addEventListener("click", () => {
    turn = true;
    enableBoxes();
});
```
- Clears the board

- Enables all boxes

- Resets turn to Player X
```
newButton.addEventListener("click", () => {
    turn = true;
    enableBoxes();
    msg_container.classList.add("display");
});
```

- Starts a fresh game after showing the winner

- Hides the winner message

## Winner Detection Logic
```
const winner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};
```
**How it works:**

- Loops through all winning patterns

- Retrieves values of three matching boxes

- Checks if:

  - All boxes are filled

  - All three values are equal

- Declares the winner and disables the board

## Disabling & Enabling Boxes
```
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
```
- Prevents further moves after a win
```
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
```
- Clears and re-enables all boxes for a new game

## Displaying the Winner
```
const showWinner = (win) => {
    msg.innerHTML = "Congratulations, winner is " + win;
    msg_container.classList.remove("display");
};
```
- Displays the winner (X or O)
- Makes the message container visible
