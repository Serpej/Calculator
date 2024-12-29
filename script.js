let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

let leftNum = "";
let operator= "";
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
            operator != "" 
            ? updateRight("0")
            : updateLeft("0");
            break;
        
        case "one":
            operator != "" 
            ? updateRight("1")
            : updateLeft("1");
            break;
        
        case "two":
            operator != "" 
            ? updateRight("2")
            : updateLeft("2");
            break;
        
        case "three":
            operator != "" 
            ? updateRight("3")
            : updateLeft("3");
            break;
        
        case "four":
            operator != "" 
            ? updateRight("4")
            : updateLeft("4");
            break;

        case "five":
            operator != "" 
            ? updateRight("5")
            : updateLeft("5");
            break;

        case "six":
            operator != "" 
            ? updateRight("6")
            : updateLeft("6");
            break;

        case "seven":
            operator != "" 
            ? updateRight("7")
            : updateLeft("7");
            break;

        case "eight":
            operator != "" 
            ? updateRight("8")
            : updateLeft("8");
            break;

        case "nine":
            operator != "" 
            ? updateRight("9!")
            : updateLeft("9");
            break;

    
    }
});

// operator = + || / || * || - ? updateRight() : updateLeft();

function updateLeft(string) {
    leftNum += string;
    return display.textContent = leftNum;
};
function updateRight(string) {
    rightNum += string;
    return display.textContent = rightNum;
};

// Store operator in var Operator.
// Trigger if statement, if operator was pressed, store variable in rihtNum instead.
// "=" Converts leftNum and rightNum into numbers and calls Operate function with variables as arguments.
// "clear" button needs to reset if statement and clear display (textContent = "";)

// Koppla event listeners för klick på knappar till att skapa något på "display" (div med innehåll?).
// Koppla event listeners för knapptryckningar för samma sak. (?)
// vid tryck på "=" ska operate funktionen användas.
// vid "clear" ska allt på displayen tas bort.



