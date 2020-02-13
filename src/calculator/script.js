let a = document.getElementsByClassName('number');
let b = document.getElementsByClassName('number');



function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mul(a, b) {
    return a * b;
}
clear.addEventListener('click', clearInp)
function clearInp() {
    inp.value = '';
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
}