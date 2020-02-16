"use strict"

const digitSumm = (num) => {
    if (typeof num == 'number') {
        if (Math.ceil(num) - num <= 0) {
            num = Math.abs(num)
            num = String(num);
            let result = 0;
            for (let i = 0; i < num.length; i++)
                result += +(num[i]);
            return result;
        } return 'Value is not integer or NaN'
    } return 'Invalid type of value'
}

