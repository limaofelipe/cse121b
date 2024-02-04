/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.getElementById("add1").value);
  let addNumber2 = Number(document.getElementById("add2").value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2)
  return addNumber1 + addNumber2;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
  return number1 - number2;
}

const subtractNumbers = function() {
  const subtract1 = Number(document.getElementById("subtract1").value);
  const subtract2 = Number(document.getElementById("subtract2").value);
  document.getElementById("difference").value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divideNumbers = function() {
  let dividend = Number(document.getElementById("dividend").value);
  let divisor = Number(document.getElementById("divisor").value);
  let quotient = Math.floor(dividend / divisor);
  document.getElementById("quotient").value = quotient;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Get references to HTML elements
const subtotalInput = document.getElementById("subtotal");
const membershipCheckbox = document.getElementById("membership");
const totalSpan = document.getElementById("totalSpan");
const getTotal = document.getElementById("getTotal");

// Event listener for button click
getTotal.addEventListener("click", calculateTotal);
// Function to calculate total due
function calculateTotal() {
    // Get the numeric value from the subtotal input
    const subtotalValue = Number(subtotal.value);

    // Check if the membership checkbox is checked
    const isMembershipApplied = member.checked;

    // Calculate total with or without discount
    let total;
    if (isMembershipApplied) {
        // Apply 20% discount
        total = subtotalValue * 0.8;
    } else {
        total = subtotalValue;
    }

    // Display the total with two decimal places
    document.querySelector('#total').innerHTML = total.toFixed(2);
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 0)
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0)

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number)=> sum + number)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
const arrayMultiplied = numbersArray.map(number => number * 2)
const sum = arrayMultiplied.reduce((sum, number)=> sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = sum

