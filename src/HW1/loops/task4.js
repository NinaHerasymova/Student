"use strict"

const factorial = (num) => {
    if (typeof num == 'number') {
        if (Math.ceil(num) - num<=0) {
            if (num > 0) {
                let val = 1;

                for (let i = 2; i <= num; i++)
                    val = val * i;
                return val;
            } return 'Number is not natural'
        } return 'Value is not integer or NaN'
    } return 'Invalid type of value'
}
