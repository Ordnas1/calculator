/* Script for Online Calculator
* by Sandro Peirano */

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