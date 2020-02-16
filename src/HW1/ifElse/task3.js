"use strict"

const max = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "One of argument is NaN or undefined!!!"
    } else if (typeof a == 'number' & typeof b == 'number' & typeof c == 'number') {
        let summ = 0;
        if (a > 0) {
            summ = summ + a;
        }
        if (b > 0) {
            summ = summ + b;
        }
        if (c > 0) {
            summ = summ + c
        }
        return summ
    } return 'Invalid type of value'
}
