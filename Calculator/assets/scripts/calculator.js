const defaultResult = 0; 
let presentResult = defaultResult; //semicolon is optional
let logEntries = []; // currently creating an empty array

function getUserInput(){
	return parseInt(userInput.value);
}

function writeResult(beforeCalculation, operator, resultNumber){
	const description = `${beforeCalculation}  ${operator}  ${resultNumber}`
	outputResult(presentResult, description);
}

function writeLog(opIdentifier, prevResult, opNumber, newResult) {
	const logEntry = {
		operations: opIdentifier,
		previousNum: prevResult,
		entered: opNumber,
		current: newResult
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function add() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult + enteredNumber;
	writeResult(initialResult, '+', enteredNumber);
	writeLog('SUM', initialResult, enteredNumber, presentResult);
	
}

function subtract() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult - enteredNumber;
	writeResult(initialResult, '-', enteredNumber);
	writeLog('SUBTRACT', initialResult, enteredNumber, presentResult);
}
function multiply() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult * enteredNumber;
	writeResult(initialResult, '*', enteredNumber);
	writeLog('MULTIPLY', initialResult, enteredNumber, presentResult);
}
function divide() {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	presentResult = presentResult / enteredNumber;
	writeResult(initialResult, '/', enteredNumber);
	writeLog('DIVIDE', initialResult, enteredNumber, presentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
