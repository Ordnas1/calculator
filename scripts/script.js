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

// Display related functions

let displayNum = '';
let displayNumFormated = '';
let mantissaValue = 0;
let displayNumDecimal = false;

let displayMantissa = document.querySelector(".display-text");    
let buttonNum = document.querySelectorAll(".calc-btn-num")
buttonNum.forEach(button => button.addEventListener('click', e => {
    if (displayNumDecimal && e.target.dataset.value == "."){
        return
    }   else {
        displayNum = displayNum + e.target.dataset.value
        mantissaValue = Number(displayNum)
        displayNumFormated = mantissaValue.toLocaleString(undefined, {maximumSignificantDigits: 15})

    }
    console.log(displayNum)
    console.log(mantissaValue)
    console.log(displayNumFormated)
    displayMantissa.textContent = displayNumFormated;
}))



let buttonDecimal = document.querySelector("#dec-point")
buttonDecimal.addEventListener('click', () => displayNumDecimal = true)