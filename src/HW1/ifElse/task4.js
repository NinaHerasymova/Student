"use strict"
const add = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 'One of argument is NaN or undefined!!!'
    }
    if (typeof a == 'number' & typeof b == 'number' & typeof c == 'number') {
        if (a * b * c > a + b + c) {
            return (a * b * c + 3)
        } else if (a * b * c < a + b + c) {
            return (a + b + c + 3)
        } else {
            return ('Expressions are equal')
        }
    } return 'Invalid type of value'
}
