"use strict"

const sqrt = (num) => {
    if (typeof num == 'number') {
        if (Math.ceil(num) - num<=0) {
            if (num > 0) {
                let root = 0;
                while (root * root <= num) {
                    root++
                }
               const res = root - 1;
                return (res)
            }return 'Number is not natural'            
        } return 'Value is not integer or NaN'
    } return 'Invalid type of value'
}
