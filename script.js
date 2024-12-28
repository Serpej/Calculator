let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

let leftNum = "";
let Operator;
let rightNum = "";

function operate(leftNum, operator, rightNum) {
    if (operator = "+") {
        return add(leftNum, rightNum);

    } else if (operator = "-") {
        return subtract(leftNum, rightNum);

    } else if (operator = "*") {
        return multiply(leftNum,rightNum);
        
    } else if (operator = "/") {
        return divide(leftNum,rightNum);
    }
}

const display = document.querySelector(".display");

const buttonContainer = document.querySelector(".buttonContainer");

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.className) {
        case "zero":
            leftNum += "0"
            display.textContent = leftNum;
            break;
        
        case "one":
            leftNum += "1"
            display.textContent = leftNum;
            break;
        
        case "two":
            leftNum += "2"
            display.textContent = leftNum;
            break;
        
        case "three":
            leftNum += "3"
            display.textContent = leftNum;
            break;
        
        case "four":
            leftNum += "4"
            display.textContent = leftNum;
            break;

        case "five":
            leftNum += "5"
            display.textContent = leftNum;
            break;

        case "six":
            leftNum += "6"
            display.textContent = leftNum;
            break;

        case "seven":
            leftNum += "7"
            display.textContent = leftNum;
            break;

        case "eight":
            leftNum += "8"
            display.textContent = leftNum;
            break;

        case "nine":
            leftNum += "9"
            display.textContent = leftNum;
            break;

    
    }
});

// Store numbers pressed in leftNum through eventlistener.
// Store operator in var Operator.
// Trigger if statement, if operator was pressed, store variable in rihtNum instead.
// "=" Converts leftNum and rightNum into numbers and calls Operate function with variables as arguments.
// "clear" button needs to reset if statement and clear display (textContent = "";)

// Koppla event listeners för klick på knappar till att skapa något på "display" (div med innehåll?).
// Koppla event listeners för knapptryckningar för samma sak. (?)
// vid tryck på "=" ska operate funktionen användas.
// vid "clear" ska allt på displayen tas bort.



