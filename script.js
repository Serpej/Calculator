let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

let leftNum = "";
let operator= "";
let rightNum = "";
let resultString
let resultNum = "";

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

const numbersShown = document.querySelector(".numbersShown");

const buttonContainer = document.querySelector(".buttonContainer");

function updateLeft(string) {
    leftNum += string;
    return numbersShown.textContent = leftNum;
};

function updateOperator(left, symbol) {
    operator = symbol;
    return numbersShown.textContent = `${left} ${operator}`;
};


function updateRight(string) {
    rightNum += string;
    return numbersShown.textContent = `${leftNum}${operator}${rightNum}`;
};

let clear = () => {
    leftNum ="";
    rightNum ="";
    operator ="";
    return numbersShown.textContent="";
}

let postClear = () => {
    leftNum = "";
    rightNum = "";
    return operator = "";

}

function checkOperator(symbol) {
    if (leftNum != "" && operator != "" && rightNum != "") {
        resultNum = operate(Number(leftNum), operator, Number(rightNum)).toFixed(2); 
        resultString =
        !Number.isInteger(resultNum) 
        ? resultNum.toFixed(3)
        : String(resultNum);
        numbersShown.textContent = `${resultString}${symbol}`;
        rightNum = "";
        leftNum = resultString;
        return operator = symbol;
    }
}

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    if (numbersShown.textContent === resultString) {
        
        leftNum = resultString;
        numbersShown.textContent= leftNum;

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
            operator === "" 
            ? updateOperator(leftNum, "+")
            : checkOperator("+");
            break;
        
        case "subtract":
            operator === "" 
            ? updateOperator(leftNum, "-")
            : checkOperator("-");
            break;

        case "multiply":
            operator === "" 
            ? updateOperator(leftNum, "*")
            : checkOperator("*");
            break;
        
        case "divide":
            operator === "" 
            ? updateOperator(leftNum, "/")
            : checkOperator("/");
            break;
   
        case "clear":
            clear()
            break;
        
        case "sum":
            if (operator === "/" && rightNum === "0") {
                clear();
                numbersShown.textContent = "Stop it!";
            } else if (leftNum === "" || operator ==="" || rightNum ==="") {
                return;
            } else {
            
                resultNum = operate(Number(leftNum), operator, Number(rightNum));
                resultString =
                    !Number.isInteger(resultNum) 
                    ? resultNum.toFixed(3)
                    : String(resultNum);
                numbersShown.textContent = resultString;
                return postClear();}
    }
});

document.addEventListener("keydown", (event) => {
    let target = event;

    if (numbersShown.textContent === resultString) {
        
        leftNum = resultString;
        numbersShown.textContent= leftNum;

            switch (target.key) {
    
                case "+":
                    updateOperator(leftNum, "+");
                    break;
    
                case "-":
                    updateOperator(leftNum, "-");
                    break;
    
                case "*":
                    updateOperator(leftNum, "*");
                    break;
                    
                case "/":
                    updateOperator(leftNum,"/");
                    break;
    
                case "Enter":
    
                    break;
    
                default:
                    clear()
                    break;
            };
    };
    switch (target.key) {
        
        case "0":
            operator === "" 
            ? updateLeft("0")
            : updateRight("0");
            break;

            case "1":
                operator === "" 
                ? updateLeft("1")
                : updateRight("1");
                break;
            
            case "2":
                operator === "" 
                ? updateLeft("2")
                : updateRight("2");
                break;
            
            case "3":
                operator === "" 
                ? updateLeft("3")
                : updateRight("3");
                break;
            
            case "4":
                operator === "" 
                ? updateLeft("4")
                : updateRight("4");
                break;
    
            case "5":
                operator === "" 
                ? updateLeft("5")
                : updateRight("5");
                break;
    
            case "6":
                operator === "" 
                ? updateLeft("6")
                : updateRight("6");
                break;
    
            case "7":
                operator === "" 
                ? updateLeft("7")
                : updateRight("7");
                break;
    
            case "8":
                operator === "" 
                ? updateLeft("8")
                : updateRight("8");
                break;
    
            case "9":
                operator === "" 
                ? updateLeft("9")
                : updateRight("9");
                break;
            
            case "+":
                operator === "" 
                ? updateOperator(leftNum, "+")
                : checkOperator("+");
                break;
            
            case "-":
                operator === "" 
                ? updateOperator(leftNum, "-")
                : checkOperator("-");
                break;
    
            case "*":
                operator === "" 
                ? updateOperator(leftNum, "*")
                : checkOperator("*");
                break;
            
            case "/":
                operator === "" 
                ? updateOperator(leftNum, "/")
                : checkOperator("/");
                break;
       
            case "Backspace":
                clear()
                break;
            
            case "Enter":
                if (operator === "/" && rightNum === "0") {
                    clear();
                    numbersShown.textContent = "Stop it!";
                } else if (leftNum === "" || operator ==="" || rightNum ==="") {
                    return;
                } else {
                
                    resultNum = operate(Number(leftNum), operator, Number(rightNum));
                    resultString =
                        !Number.isInteger(resultNum) 
                        ? resultNum.toFixed(3)
                        : String(resultNum);
                    numbersShown.textContent = resultString;
                    return postClear();}
        }
})
