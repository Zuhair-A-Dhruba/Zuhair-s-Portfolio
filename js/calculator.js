// Select elements
const display = document.getElementById('display'); // This is the display where the numbers will appear
let currentInput = ''; // this will hold the current input

// I have used function to add a number to the current input
function addToInput(value) {
    currentInput += value;
    display.value = currentInput;
}

// This is the function to calculate the result
function calculate() {
    try {
        currentInput = eval(currentInput); // I used eval to compute the expression
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error'; // this will Show error if the input is invalid
    }
}

// This function is to clear the display
function clearDisplay() {
    currentInput = '';
    display.value = '';
}
