window.onload = function() {
	// Calculator Displays 
	var calculatorDisplay = document.getElementById("result_display_value");
	var operator 					= document.getElementById("operator_display");
	var calculator				= document.querySelector("#container")

	//  Calculator numerical buttons
	var numberOne 	= document.querySelector("#number_1"),
			numberTwo		=	document.querySelector("#number_2"),
			numberThree	=	document.querySelector("#number_3"),
			numberFour	=	document.querySelector("#number_4"),
			numberFive	=	document.querySelector("#number_5"),
			numberSix		=	document.querySelector("#number_6"),
			numberSeven	=	document.querySelector("#number_7"),
			numberEight	=	document.querySelector("#number_8"),
			numberNine	=	document.querySelector("#number_9"),
			numberZero	=	document.querySelector("#number_0");
	// Calculator operations
	var additionOp = document.querySelector("#op_plus"),
			subtractOp = document.querySelector("#op_sub"),
			multiplyOp = document.querySelector("#op_mult"),
			divideOp 	 = document.querySelector("#op_div"),
			enterOp 	 = document.querySelector("#op_ent"),
			clearOp 	 = document.querySelector("#op_clr");
	// The calculators state
	var hiddenOperand;

	// The event handler functions
	numberOne.onclick = function() {
		calculatorDisplay.innerHTML += '1';
	};
	numberTwo.onclick = function() {
		calculatorDisplay.innerHTML += '2';
	};
	numberThree.onclick = function() {
		calculatorDisplay.innerHTML += '3';
	};
	numberFour.onclick = function() {
		calculatorDisplay.innerHTML += '4';
	};
	numberFive.onclick = function() {
		calculatorDisplay.innerHTML += '5';
	};
	numberSix.onclick = function() {
		calculatorDisplay.innerHTML += '6';
	};
	numberSeven.onclick = function() {
		calculatorDisplay.innerHTML += '7';
	};
	numberEight.onclick = function() {
		calculatorDisplay.innerHTML += '8';
	};
	numberNine.onclick = function() {
		calculatorDisplay.innerHTML += '9';
	};
	numberZero.onclick = function() {
		calculatorDisplay.innerHTML += '0';
	};
	additionOp.onclick = function() {
		hiddenOperand = calculatorDisplay.innerHTML;
		console.log(hiddenOperand);
		calculatorDisplay.innerHTML = '';
		operator.innerHTML = '+';
	};
	subtractOp.onclick = function() {
		hiddenOperand = calculatorDisplay.innerHTML;
		console.log(hiddenOperand);
		calculatorDisplay.innerHTML = '';
		operator.innerHTML = '-';
	};
	multiplyOp.onclick = function() {
		hiddenOperand = calculatorDisplay.innerHTML;
		console.log(hiddenOperand);
		calculatorDisplay.innerHTML = '';
		operator.innerHTML = '*';
	};
	
}