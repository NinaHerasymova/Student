
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
    if (val1 == 0 && val2 == 0 || val2 == 0) {
        return 'Error'
    }
    return val1 / val2;
}
module.exports={add, sub, mul, div}
