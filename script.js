console.log("Connected")

let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operator = null;
let shouldResetScreen = false;

//-- button selector --//

//clear button
const clearButton = document.querySelector('.btn.clear');

//number button
const numberButtons = document.querySelectorAll('.btn.number');

//operator button
const operatorButtons = document.querySelectorAll('.btn.operator');

//decimal button
const decimalButton = document.querySelector('.btn.decimal');

//equal button
const equalButton = document.querySelector('.btn.equal');

//update the display with current input
function updateDisplay() {
    display.textContent = currentInput || "0";
}

//clear display function

clearButton.addEventListener('click',clear);

function clear(){
    currentInput = '';
    firstOperand = null;
    operator = null;
    shouldResetScreen = false;
    updateDisplay()
}

//adding onclick to every number button and handle number presses

numberButtons.forEach( button => {
    button.addEventListener('click', () =>{
        const value = button.textContent;
        //Update the display value;
        if(display.textContent === "0" || shouldResetScreen){
            currentInput = value; // will display the value
        } else {
            currentInput += value;
        }

        updateDisplay();
        
    })
})
//handles decimal

decimalButton.addEventListener('click', handleDecimal);

function handleDecimal(){
    if (currentInput.includes('.')) return;
    currentInput += ".";
    updateDisplay();
}

//onclick for every operator

operatorButtons.forEach( button =>{
    button.addEventListener('click', () =>{
        const value = button.textContent;
        handleOperator(value);
    })
})

//handling operator +-/*
function handleOperator(value){
    if (operator !== null && shouldResetScreen === false) evaluate();
    firstOperand = currentInput;
    operator = value;
    shouldResetScreen = true;
}

//evaluating
equalButton.addEventListener('click', evaluate)

function evaluate(){
    if (operator === null || shouldResetScreen === true) return;
    const secondOperand = currentInput;
    const result = operate(operator, firstOperand, secondOperand);
    currentInput = result;
    operator = null;
    firstOperand = null;
    shouldResetScreen = true;
    updateDisplay()
}

//operate
function operate(operator, a, b) {
   const numA = Number(a);
   const numB = Number(b);
   switch(operator) {
    case "+" :
        return numA + numB;
    case "-" :
        return numA - numB;
    case "*":
        return numA * numB;
    case "/":
        if (numB === 0) return "Error";
        return numA / numB;
    default:
        return "Invalid Operator";
   }
}