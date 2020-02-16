"use strict"
const ternar = (a, b) => {

    if (typeof a == 'number' & typeof b == 'number') {
        if (Math.ceil(a) - a <= 0) {
            return ((a % 2 === 0) ? a * b : a + b)
        } return 'Value is not integer or NaN'
    } return 'Invalid type of value'

}
