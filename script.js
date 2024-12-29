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

function updateLeft(string) {
    leftNum += string;
    return display.textContent = leftNum;
};

function updateOperator(symbol,left) {
    operator = symbol;
    return display.textContent = `${left} ${operator}`;
};


function updateRight(string) {
    rightNum += string;
    return display.textContent = `${leftNum}${operator}${rightNum}`;
};
  
buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.className) {
        case "zero":
            operator === "" 
            ? updateLeft("0")
            : updateRight("0");
            break;
        
        case "one":
            operator === "" 
            ? updateLeft("1")
            : updateRight("1");
            break;
        
        case "two":
            operator === "" 
            ? updateLeft("2")
            : updateRight("2");
            break;
        
        case "three":
            operator === "" 
            ? updateLeft("3")
            : updateRight("3");
            break;
        
        case "four":
            operator === "" 
            ? updateLeft("4")
            : updateRight("4");
            break;

        case "five":
            operator === "" 
            ? updateLeft("5")
            : updateRight("5");
            break;

        case "six":
            operator === "" 
            ? updateLeft("6")
            : updateRight("6");
            break;

        case "seven":
            operator === "" 
            ? updateLeft("7")
            : updateRight("7");
            break;

        case "eight":
            operator === "" 
            ? updateLeft("8")
            : updateRight("8");
            break;

        case "nine":
            operator === "" 
            ? updateLeft("9")
            : updateRight("9");
            break;
        
        case "add":
            updateOperator("+",leftNum);
            break;
        
        case "subtract":
            updateOperator("-",leftNum);
            break;

        case "multiply":
            updateOperator("*",leftNum);
            break;
        
        case "divide":
            updateOperator("/",leftNum);
            break;
   
        case "clear":
            leftNum ="";
            rightNum ="";
            operator ="";
            display.textContent="";
            break;

    }
});

// Store operator in var Operator.
// "=" Converts leftNum and rightNum into numbers and calls Operate function with variables as arguments.
// "clear" button needs to reset if statement and clear display (textContent = "";)

// Koppla event listeners för klick på knappar till att skapa något på "display" (div med innehåll?).
// Koppla event listeners för knapptryckningar för samma sak. (?)
// vid tryck på "=" ska operate funktionen användas.
// vid "clear" ska allt på displayen tas bort.



