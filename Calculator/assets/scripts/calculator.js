const defaultResult = 0; 
let presentResult = defaultResult; //semicolon is optional

function getUserInput(){
	return parseInt(userInput.value);
}

function writeResult(beforeCalculation, operator, resultNumber){
	const description = `${beforeCalculation}  ${operator}  ${resultNumber}`
	outputResult(presentResult, description);

}
function add() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult + enteredNumber;
	writeResult(initialResult, '+', enteredNumber);

}

function subtract() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult - enteredNumber;
	writeResult(initialResult, '-', enteredNumber);
}
function multiply() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult * enteredNumber;
	writeResult(initialResult, '*', enteredNumber);
}
function divide() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult / enteredNumber;
	writeResult(initialResult, '/', enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
