let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

const display = document.querySelector(".display");

// Target alla buttons (för sig? eller alla har samma något slags bubblande?)
// Koppla event listeners för klick på knappar till att skapa något på "display" (div med innehåll?).
// Koppla event listeners för knapptryckningar för samma sak.
// vid tryck på "=" ska operate funktionen användas.
// vid "clear" ska allt på displayen tas bort.

let test = multiply(30, 30);
console.log(test);

let leftNum;
let Operator;
let rightNum;

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