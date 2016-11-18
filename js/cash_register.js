/*var myCalc = Calculator();
var answer;

zero.addEventListener('click',function() {
  if (parseFloat(display.innerHTML) !== 0 || display.innerHTML.indexOf('.') !== -1) {
    clearDisplay();
    display.innerHTML += 0;
    answer = false;
  }
});

doubleZero.addEventListener('click',function() {
  clearDisplay();
  display.innerHTML += '.00';
  answer = false;
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
  if (answer === false) {
    myCalc.add();
    answer = true;
  }
});

subtract.addEventListener('click', function() {
  if (answer === false) {
  myCalc.subtract();
  answer = true;
  }
});

multiply.addEventListener('click', function() {
  if (answer === false) {
    myCalc.multiply();
    answer = true;
  }
});

divide.addEventListener('click', function() {
  if (answer === false) {
    myCalc.divide();
    answer = true;
  }
});

equals.addEventListener('click', function() {
  if (answer === false) {
    myCalc.equals();
  }
});

getBalance.addEventListener('click', myCalc.getBalance);

depositCash.addEventListener('click', function() {
  myCalc.deposit(parseFloat(display.innerHTML));
});

withdrawCash.addEventListener('click', function() {
  myCalc.withdraw(parseFloat(display.innerHTML));
});

function clearDisplay() {
 console.log(answer);
 if ((parseFloat(display.innerHTML) === 0 && display.innerHTML.indexOf('.') === -1) || answer === true) {
   display.innerHTML = null;
 }
}*/

//////////////////


var myCalc = Calculator();
var answer = false;

zero.addEventListener('click',function() {if (parseFloat(display.innerHTML) !== 0 || display.innerHTML.indexOf('.') !== -1) {clearDisplay(); display.innerHTML += 0;} });

one.addEventListener('click',function() {clearDisplay(); display.innerHTML += 1;});

two.addEventListener('click',function() {clearDisplay(); display.innerHTML += 2;});

three.addEventListener('click',function() {clearDisplay(); display.innerHTML += 3;});

four.addEventListener('click',function() {clearDisplay(); display.innerHTML += 4;});

five.addEventListener('click',function() {clearDisplay(); display.innerHTML += 5;});

six.addEventListener('click',function() {clearDisplay(); display.innerHTML += 6;});

seven.addEventListener('click',function() {clearDisplay(); display.innerHTML += 7;});

eight.addEventListener('click',function() {clearDisplay(); display.innerHTML += 8;});

nine.addEventListener('click',function() {clearDisplay(); display.innerHTML += 9;});

decimal.addEventListener('click',function() {if (display.innerHTML.indexOf('.') === -1 || answer === true) {clearDisplay(); display.innerHTML += '.';}});

doubleZero.addEventListener('click',function() {if (display.innerHTML.indexOf('.') === -1) {display.innerHTML += '.00';}});

clear.addEventListener('click',myCalc.clear);

add.addEventListener('click',function() {
  myCalc.add();
  answer = true;
});

subtract.addEventListener('click', function() {
  myCalc.subtract();
  answer = true;
});

multiply.addEventListener('click', function() {
  myCalc.multiply();
  answer = true;
});

divide.addEventListener('click', function() {
  myCalc.divide();
  answer = true;
});

equals.addEventListener('click', function() {
 myCalc.equals();
 answer = true;
});

getBalance.addEventListener('click', function() {
 myCalc.getBalance();
 answer = true;
});

depositCash.addEventListener('click', function() {
   myCalc.deposit();
   answer = true;
});
withdrawCash.addEventListener('click', function() {
   myCalc.withdraw();
   answer = true;
});

function clearDisplay() {
 console.log(answer);
 if (parseFloat(display.innerHTML) === 0 || answer === true) {
   display.innerHTML = null;
   answer = false;
 }
}