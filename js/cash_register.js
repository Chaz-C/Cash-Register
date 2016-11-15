var myCalc = Calculator();
var answer;
var keypress = false;

zero.addEventListener('click',function() {
  if (parseFloat(display.innerHTML) !== 0 || display.innerHTML.indexOf('.') !== -1) {
    clearDisplay();
    display.innerHTML += 0;
    answer = false;
  }
});

one.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 1;
  answer = false;
});

two.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 2;
  answer = false;
});

three.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 3;
  answer = false;
});

four.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 4;
  answer = false;
});

five.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 5;
  answer = false;
});

six.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 6;
  answer = false;
});

seven.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 7;
  answer = false;
});

eight.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 8;
  answer = false;
});

nine.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += 9;
  answer = false;
});

decimal.addEventListener('click',function() {
  if (display.innerHTML.indexOf('.') === -1 && answer === false); {
    clearDisplay();
    display.innerHTML += '.';
  }
  answer = false;
});

clear.addEventListener('click',myCalc.clear);

add.addEventListener('click',function() {
/*
  if ( keypress === true ) {
    myCalc.resetOp();
    answer = false;
    keypress = false;
  }*/

  if (answer === false) {
    myCalc.add();
    answer = true;

    // keypress = true;
  }
});

subtract.addEventListener('click', function() {

  /*if ( keypress === true ) {
    myCalc.resetOp();
    answer = false;
    keypress = false;
  }*/

  if (answer === false) {
    myCalc.subtract();
    answer = true;

    // keypress = true;
  }
});

multiply.addEventListener('click', function() {

  /*if ( keypress === true ) {
    myCalc.resetOp();
    answer = false;
    keypress = false;
  }*/

  if (answer === false) {
    myCalc.multiply();
    answer = true;

    // keypress = true;
  }
});

divide.addEventListener('click', function() {

  /*if ( keypress === true ) {
    myCalc.resetOp();
    answer = false;
    keypress = false;
  }*/

  if (answer === false) {
    myCalc.divide();
    answer = true;

    // keypress = true;
  }
});

equals.addEventListener('click', function() {
  if (answer === false) {
    myCalc.equals();
  }
});

getBalance.addEventListener('click', myCalc.getBalance);

depositCash.addEventListener('click', myCalc.depositCash);

withdrawCash.addEventListener('click', myCalc.withdrawCash);

function clearDisplay() {
 console.log(answer);
 if ((parseFloat(display.innerHTML) === 0 && display.innerHTML.indexOf('.') === -1) || answer === true) {
   display.innerHTML = null;
 }
}