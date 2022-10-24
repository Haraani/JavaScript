const defaultValue = 0; // Global Variable
let currentResult = defaultValue; //Global Variable

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, beforeCalc, afterCalc) {
  const calcDescription = `${beforeCalc} ${operator} ${afterCalc} `;
  outputResult(currentResult, calcDescription); // from vendor.js
}

function add() {
  // function definition function(parameters){statements and return statement}
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber; //local variable
  createAndWriteOutput('+', initialResult, enteredNumber);

  // alert(sumResult)
  //   return sumResult;
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber; //local variable
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber; //local variable
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber; //local variable
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);