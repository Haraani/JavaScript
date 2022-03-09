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

function Calculate(type) {
	const enteredNumber =  getUserInput();
	const initialResult = presentResult;
	let mathOperator;
	if (type === 'ADD'){
		presentResult += enteredNumber ;
		mathOperator = '+';
	}
	else if(type === 'SUBTRACT'){
		presentResult -= enteredNumber ;
		mathOperator = '-';
	}
	else if (type === 'MULTIPLY'){
		presentResult = presentResult*enteredNumber;
		mathOperator = '*';
	}
	else{
		presentResult = presentResult/enteredNumber;
		mathOperator = '/';
	}
	
	writeResult(initialResult, mathOperator, enteredNumber);
	writeLog(type, initialResult, enteredNumber, presentResult)
}
function add() {
	Calculate('ADD');
}

function subtract() {
	Calculate('SUBTRACT');
}
function multiply() {
	Calculate('MULTIPLY');
}
function divide() {
	Calculate('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
 