console.log("Connected")

let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operator = null;
let shouldResetScreen = false;

//update the display with current input
function updateDisplay() {
    display.textContent = currentInput || "0";
}

//adding onclick to every number button
const numberButtons = document.querySelectorAll('.btn.number');

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

//onclick for every operator
const operatorButtons = document.querySelectorAll('.btn.operator');

operatorButtons.forEach( button =>{
    button.addEventListener('click', () =>{
        const value = button.textContent;
        handleOperator(value);
    })
})



//clear display function

const clearButton = document.querySelector('.btn.clear');
clearButton.addEventListener('click',clear);

function clear(){
    currentInput = '';
    firstOperand = null;
    operator = null;
    shouldResetScreen = false;
    updateDisplay()
}
