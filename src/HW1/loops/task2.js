"use strict"

const ifPrime = (num) => {
    if (typeof num == 'number') {
        if (Math.ceil(num) - num <= 0) {
            if (num > 0) {
                if ((num % 2 == 0) && (num !== 2)) {
                    return 'Composite';
                } else if (num === 2) {
                    return 'Prime';
                } else {
                    let k = Math.round(Math.sqrt(num));
                    for (let i = 2; i < k + 1; i++)
                        if (num % i === 0) {
                            return 'Composite';
                        } return 'Prime';
                }
            } return 'Number is not natural'
        } return 'Number is not integer or NaN'
    } return 'Invalid type of value'
}
