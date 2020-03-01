"use strict";

//const logic = require('./logic').logic;
//let buttons = document.querySelectorAll('.flex input');
var number = document.querySelectorAll('.number');
var sign = document.querySelectorAll('.sign');
var result = document.querySelector('.result');
var clear = document.querySelector('.clear');
var inp = document.querySelector('#inp');
var preview = document.querySelector('#preview');
var dot = document.querySelector('#dot');
var val1 = '';
var val2 = '';
var oper = '';
var isOpClick = false;
var isDot1 = false;
var isDot2 = false;
var num;

for (var i = 0; i < number.length; i++) {
  var getValue = function getValue() {
    num = this.value;

    if (isOpClick == false) {
      val1 += num;
      inp.value = val1;
      preview.textContent += num;
      return val1;
    }

    if (isOpClick == true) {
      val2 += num;
      inp.value = val2;
      preview.textContent += num;
      return val2;
    }
  };

  number[i].addEventListener('click', getValue);
}

dot.addEventListener('click', addDot);

function addDot() {
  if (isDot1 === false && isOpClick === false) {
    val1 += this.value;
    inp.value += this.value;
    preview.textContent += this.value;
    isDot1 = true;
  } else if (isDot2 === false && isOpClick === true) {
    val2 += this.value;
    inp.value += this.value;
    preview.textContent += this.value;
    isDot2 = true;
  }

  return;
}

for (var _i = 0; _i < sign.length; _i++) {
  var _getValue = function _getValue() {
    if (isOpClick === false) {
      oper = this.value;
      preview.textContent += this.value;
      isOpClick = true;
    }
  };

  sign[_i].addEventListener('click', _getValue);
}

function reset() {
  preview.textContent += '=' + inp.value;
  val1 = inp.value;
  val2 = '';
  isOpClick = false;
  isDot1 = false;
  isDot2 = false;
}

result.addEventListener('click', getResult);

function getResult() {
  switch (oper) {
    case '+':
      inp.value = add(val1, val2);
      reset();
      break;

    case '-':
      inp.value = sub(val1, val2);
      reset();
      break;

    case '*':
      inp.value = mul(val1, val2);
      reset();
      break;

    case '/':
      inp.value = div(val1, val2);
      reset();
      break;
  }
}

clear.addEventListener('click', clearInp);

function clearInp(e) {
  inp.value = '';
  preview.textContent = '';
  val1 = '';
  val2 = '';
  oper = '';
  isOpClick = false;
  isDot1 = false;
  isDot2 = false;
} // module.exports = {
//     add,
//     sub,
//     mul,
//     div
// };