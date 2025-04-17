console.log("Connected")

let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let seconOperand = null;
let operator = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('.btn.number');

numberButtons.forEach(button=>{
    button.addEventListener('click', () =>{
        const value = button.textContent;
        //Update the display value;
        if(display.textContent === "0"){
            display.textContent = value; // will display the value
        } else {
            display.textContent += value;
        }
    })
})
