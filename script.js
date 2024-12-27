let add = (leftNum, rightNum) => leftNum + rightNum;
let subtract = (leftNum, rightNum) => leftNum - rightNum;
let multiply = (leftNum, rightNum) => leftNum * rightNum;
let divide = (leftNum, rightNum) => leftNum / rightNum;

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