let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

let leftNum = "";
let operator= "";
let rightNum = "";
let result = "";

function operate(leftNum, operator, rightNum) {
    if (operator === "+") {
        return add(leftNum, rightNum);

    } else if (operator === "-") {
        return subtract(leftNum, rightNum);

    } else if (operator === "*") {
        return multiply(leftNum,rightNum);
        
    } else if (operator === "/") {
        return divide(leftNum,rightNum);
    }
}

const display = document.querySelector(".display");

const buttonContainer = document.querySelector(".buttonContainer");

function updateLeft(string) {
    leftNum += string;
    return display.textContent = leftNum;
};

function updateOperator(left, symbol) {
    operator = symbol;
    return display.textContent = `${left} ${operator}`;
};


function updateRight(string) {
    rightNum += string;
    return display.textContent = `${leftNum}${operator}${rightNum}`;
};

let clear = () => {
    leftNum ="";
    rightNum ="";
    operator ="";
    return display.textContent="";
}
  


buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    if (display.textContent === result) {
        
        leftNum = result;
        display.textContent= leftNum;
                                            //Det verkar som om någonting blir konstigt efter den här raden.
                                            //LeftNum(result) försvinner om man trcker på en symbol, och bara symbolen dyker upp.
            switch (target.className) {
    
                case "add":
                    updateOperator(leftNum, "+");
                    break;
    
                case "subtract":
                    updateOperator(leftNum, "-");
                    break;
    
                case "multiply":
                    updateOperator(leftNum, "*");
                    break;
                    
                case "divide":
                    updateOperator(leftNum,"/");
                    break;
    
                case "sum":
    
                    break;
    
                default:
                    clear()
                    break;
            };
    };
    
    
    

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
            updateOperator(leftNum, "+");
            break;
        
        case "subtract":
            updateOperator(leftNum, "-");
            break;

        case "multiply":
            updateOperator(leftNum, "*");
            break;
        
        case "divide":
            updateOperator(leftNum, "/");
            break;
   
        case "clear":
            clear()
            break;
        
        case "sum":
           result = operate(Number(leftNum), operator, Number(rightNum));
           display.textContent = result;
           return postClear();
    }
});

let postClear = () => {
    leftNum = "";
    rightNum = "";
    return operator = "";

}



// Gör så att siffrorna blir mindre när de blir för många.
// Event listener på keyboard också?
//
