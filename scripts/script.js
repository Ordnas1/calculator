/* Script for Online Calculator
* by Sandro Peirano */

// Internal functions 
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        if (num1 === 0) {
            return "You tried to do something undetermined"
        } else {
            return "You tried to do something undefined"
        }
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2)
            break;
        case '*':
            return multiply(num1, num2)
            break;
        case '/':
            return divide(num1, num2)
            break;
        default:
            return 'INVALID OPERATOR'
    }
}

let displayNum = ''
let displayNumFormated = ''
let mantissaValue = 0

let buttonNum = document.querySelectorAll(".calc-btn-num")
buttonNum.forEach(button => button.addEventListener('click', e => {
    console.log(e.target.dataset.value)
    
}))