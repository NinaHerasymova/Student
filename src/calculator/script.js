let buttons = document.querySelectorAll('.flex input');
let number = document.querySelectorAll('.number');
let sign = document.querySelectorAll('.sign');
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
let inp = document.querySelector('#inp');
let preview = document.querySelector('#preview');
let dot = document.querySelector('#dot');
let val1 = '';
let val2 = '';
let oper = '';
let isOpClick = false;
let isDot1=false;
let isDot2=false;
let num;


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', getValue);
    function getValue() {
        num = this.value;
        if (isOpClick == false) {
            val1 += num;
            inp.value = val1;
            preview.textContent += num;
            return val1;           
        }
        if(isOpClick == true){
            
        val2 += num;
        inp.value = val2;
        preview.textContent += num;
        return val2;
        }
    }
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
    }return;
} 
        
    

for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', getValue);
    function getValue() {
        if (isOpClick === false) {            
            oper = this.value;
            preview.textContent += this.value;
            isOpClick = true;
        }
    }
}


result.addEventListener('click', getResult);
function getResult() {
    switch (oper) {
        case '+':
            inp.value = add(val1, val2); preview.textContent += '=' + inp.value; break;

        case '-':
            inp.value = sub(val1, val2); preview.textContent += '=' + inp.value; break;

        case '*':
            inp.value = mul(val1, val2); preview.textContent += '=' + inp.value; break;

        case '/':
            inp.value = div(val1, val2); preview.textContent += '=' + inp.value; break;
    }
}


function add(val1, val2) {
    return parseFloat(val1) + parseFloat(val2);
}
function sub(val1, val2) {
    return parseFloat(val1) - parseFloat(val2);
}
function mul(val1, val2) {
    return parseFloat(val1) * parseFloat(val2);    
}
function div(val1, val2) {
    if(val1==0&&val2==0||val2==0){
        return 'Error'
    }
   return val1/val2;
   //return Math.floor(val1/val2* 100) / 100 ;
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
}



