//CALCULATOR MODULE

console.log("SANITY");

function Calculator() {
  var _memory = 0;
  var _total = 0;
  var _balance = 0;
  var _operator = null;
  clear();

  function load(x) {
    _total = x;
  }

  function deposit(x) {
    _balance += x;
    display.innerHTML = _balance;
    clear();
    return _balance;
  }

  function withdraw(x) {
    _balance -= x;
    clear();
    return _balance;
  }

  function getBalance() {
    clear();
    display.innerHTML = _balance;
    return _balance;
  }

  function equals() {
   // if (_memory === _total){
   // _memory = parseFloat(display.innerHTML);
   // }
    _memory = parseFloat(display.innerHTML);
    if (_operator === add){
      _total += _memory;
    }else
    if (_operator === subtract){
      _total -= _memory;
    }else
    if (_operator === multiply){
      _total = _total * _memory;
    }else
    if (_operator === divide){
      _total = _total / _memory;
    }else{
      _total = _memory;
    }

    console.log(_operator);
    display.innerHTML = _total;
    _operator = null;

    return _total;
  }

//MATH FUNCTIONS

 function add() {
   if (_operator !== null) {
     _total = equals();
   }else{
     _total = parseFloat(display.innerHTML);
   }
   display.innerHTML = _total;
   _operator = add;
 }

 function subtract() {
   if (_operator !== null) {
     _total = equals();
   }else{
     _total = parseFloat(display.innerHTML);
   }
   display.innerHTML = _total;
   _operator = subtract;
 }

 function multiply() {
   if (_operator !== null) {
     _total = equals();
   }else{
     _total = parseFloat(display.innerHTML);
   }
   display.innerHTML = _total;
   _operator = multiply;
 }

 function divide() {
   if (_operator !== null) {
     _total = equals();
   }else{
     _total = parseFloat(display.innerHTML);
   }
   display.innerHTML = _total;
   _operator = divide;
 }

 function clear() {
   _total = 0;
   _memory = 0;
   _operator = null;
   display.innerHTML = 0;
 }

 function resetOp() {
   _operator = null;
   return _operator;
 }

 //  /**
 //  * Return the value stored at `memory`
 //  * @return { Number }
 //  */
 // function recallMemory(){
 //   return _memory;
 // }

 // *
 //  * Stores the value of `total` to `memory`

 //  function saveMemory(){
 //   _memory = _total;
 //  }

 // /**
 //  * Clear the value stored at `memory`
 //  */
 //  function clearMemory(){
 //   _memory = 0;
 //  }

 return {
   load: load,
   deposit: deposit,
   withdraw: withdraw,
   getBalance: getBalance,
   equals: equals,
   add: add,
   subtract: subtract,
   multiply: multiply,
   divide: divide,
   clear: clear,
   resetOp: resetOp
 };
}