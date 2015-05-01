window.onload = function () {
    // Calculator Displays
    var calculatorDisplay = document.getElementById("result_display_value");
    var operator          = document.getElementById("operator_display");
    var calculator        = document.querySelector("#container")

    //  Calculator numerical buttons
    var numberOne   = document.querySelector("#number_1"),
        numberTwo   = document.querySelector("#number_2"),
        numberThree = document.querySelector("#number_3"),
        numberFour  = document.querySelector("#number_4"),
        numberFive  = document.querySelector("#number_5"),
        numberSix   = document.querySelector("#number_6"),
        numberSeven = document.querySelector("#number_7"),
        numberEight = document.querySelector("#number_8"),
        numberNine  = document.querySelector("#number_9"),
        numberZero  = document.querySelector("#number_0");
    // Calculator operations
    var additionOp = document.querySelector("#op_plus"),
        subtractOp = document.querySelector("#op_sub"),
        multiplyOp = document.querySelector("#op_mult"),
        divideOp   = document.querySelector("#op_div"),
        enterOp    = document.querySelector("#op_ent"),
        squareOp   = document.querySelector("#sqr_root")
        clearOp    = document.querySelector("#op_clr");
    // The calculators state
    var hiddenOperand;

    // The event handler functions, Whats happening here is - I am implementing an onclick listener on each button
    // When that button is clicked it will display on the calculators screen.
    numberOne.onclick = function () {
        calculatorDisplay.innerHTML += '1';
    };
    numberTwo.onclick = function () {
        calculatorDisplay.innerHTML += '2';
    };
    numberThree.onclick = function () {
        calculatorDisplay.innerHTML += '3';
    };
    numberFour.onclick = function () {
        calculatorDisplay.innerHTML += '4';
    };
    numberFive.onclick = function () {
        calculatorDisplay.innerHTML += '5';
    };
    numberSix.onclick = function () {
        calculatorDisplay.innerHTML += '6';
    };
    numberSeven.onclick = function () {
        calculatorDisplay.innerHTML += '7';
    };
    numberEight.onclick = function () {
        calculatorDisplay.innerHTML += '8';
    };
    numberNine.onclick = function () {
        calculatorDisplay.innerHTML += '9';
    };
    numberZero.onclick = function () {
        calculatorDisplay.innerHTML += '0';
    };

    // When either of the buttons below are clicked I am storing the previous state and updating the display
    additionOp.onclick = function () {
        hiddenOperand = calculatorDisplay.innerHTML;
        console.log(hiddenOperand);
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = '+';
    };
    subtractOp.onclick = function () {
        hiddenOperand = calculatorDisplay.innerHTML;
        console.log(hiddenOperand);
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = '-';
    };
    multiplyOp.onclick = function () {
        hiddenOperand = calculatorDisplay.innerHTML;
        console.log(hiddenOperand);
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = '*';
    };
    divideOp.onclick = function () {
        hiddenOperand = calculatorDisplay.innerHTML;
        console.log(hiddenOperand);
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = '/';
    };
    squareOp.onclick = function () {
        hiddenOperand = calculatorDisplay.innerHTML;
        console.log(hiddenOperand);
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = Math.sqrt(hiddenOperand);
    }


    enterOp.onclick = function () {
        // all of my math logic will go here
        // Now I am just doing the math once my enter button is clicked.
        var result = parseInt(hiddenOperand);
        if (operator.innerHTML === '+') {
            result += parseInt(calculatorDisplay.innerHTML);
        } else if (operator.innerHTML === '-') {
            result -= parseInt(calculatorDisplay.innerHTML);
        } else if (operator.innerHTML === '*') {
            result *= parseInt(calculatorDisplay.innerHTML);
        } else if (operator.innerHTML === '/') {
            result /= parseInt(calculatorDisplay.innerHTML);
        } else if (operator.innerHTML === 'sqr') {
            result = parseInt(calculatorDisplay.innerHTML);
        } else {
            result = calculatorDisplay.innerHTML;
        }
        calculatorDisplay.innerHTML = result;
        operator.innerHTML = '';
    };

    // I'm clearing everything out when the clear button is pressed.
    clearOp.onclick = function () {
        hiddenOperand = undefined;
        calculatorDisplay.innerHTML = '';
        operator.innerHTML = '';
    };

    // Changing Between my light and dark background
    var bodyObj, className, index;

		bodyObj = document.getElementById('body');
		index = 1;
		className = [
		    'lightTheme',
		    'darkTheme'
		];

		function updateIndex(){
		    if(index === 0){
		        index = 1;
		    }else{
		        index = 0;
		    }
		};
		// For everytime the user clicks on the 'body' background the array index will change and my image will rotate from a light to dark theme.
		bodyObj.onclick = function(e){
		    e.currentTarget.className = className[index];
		    updateIndex();
		};
};