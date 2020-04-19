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
            return "UNDETERMINED"
        } else {
            return "THAT'S UNDEFINED"
        }
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
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
       if (e.target.dataset.value == '.' && displayNum == '') {
           displayNum = '0'
       }
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

// Calculation related functions

let operand1 = null;
let operand2 = null;
let operation = null;

let buttonOp = document.querySelectorAll(".calc-btn-op")
buttonOp.forEach(button => button.addEventListener('click', e => {
    if (displayNumDecimal) {
        displayNumDecimal = false;
    }
    operand1 = mantissaValue;
    operation = e.target.dataset.value;
    displayNum = '';
    mantissaValue = 0;
}))

let buttonEqual = document.querySelector(".equal");
buttonEqual.addEventListener('click', e => {
    if (displayNumDecimal) {
        displayNumDecimal = false;
    }
    operand2 = mantissaValue;
    operand1 = operate(operation, operand1, operand2);
    displayNumFormated = operand1.toLocaleString(undefined, {maximumSignificantDigits: 15});
    displayMantissa.textContent = displayNumFormated;
    displayNum = '';
    mantissaValue = operand1;

})

// Reset related functions

let buttonClear = document.querySelectorAll(".calc-clear")
buttonClear.forEach(button => button.addEventListener('click', () => {
    operand1 = null;
    operand2 = null;
    operation = null;
    displayNum = ''
    mantissaValue = 0
    displayMantissa.textContent = '0';
    displayNumDecimal = false;
}))

let buttonDelete = document.querySelectorAll(".calc-backspace")
buttonDelete.forEach(button => button.addEventListener('click', () => {
    if (displayNum.charAt(displayNum.length - 2 ) == ".") {
        displayNumDecimal = false
        displayNum = displayNum.substring(0, displayNum.length - 1);
    }
    if (displayNum.length === 0) return;

    displayNum = displayNum.substring(0, displayNum.length - 1);
    mantissaValue = Number(displayNum);
    displayNumFormated = mantissaValue.toLocaleString(undefined, {maximumSignificantDigits: 15});
    displayMantissa.textContent = displayNumFormated;
}))