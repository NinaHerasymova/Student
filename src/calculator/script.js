let buttons = document.querySelectorAll('.flex div');
let number = document.querySelectorAll('.number');
let sign = document.querySelectorAll('.sign');
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
let inp = document.querySelector('#inp');
let resOutput = document.querySelector('#resOutput');
let preview = document.querySelector('#preview');
let operand1;
let operand2;
let operator;


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (buttons[i].classList == 'number') {
            inp.value += this.innerHTML
            preview.textContent += this.innerHTML;
        }
        else if (buttons[i].classList == 'sign') {
            operand1 = inp.value;
            inp.value += this.innerHTML;
            preview.textContent += this.innerHTML;
        }
        if (inp.value == '+' || inp.value == '-' || inp.value == '*' || inp.value == '/') {
            operator = inp.value;
            inp.value += this.innerHTML;
            preview.textContent += this.innerHTML;
        }        
        if (buttons[i].classList == 'result') {
            operand2 = inp.value;
            inp.value = getResult()
            preview.textContent += ('=' + getResult());
        }
    }
}
function getResult() {
    resOutput = (eval(operand2))
    if(resOutput==Infinity||isNaN(resOutput)==true){
        return 'Error'
    }
    return (resOutput);
}
clear.addEventListener('click', clearInp)
function clearInp() {
    inp.value = '';
    preview.textContent = '';
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
}
