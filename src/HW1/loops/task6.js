"use strict"

const reverse = (num) => {
    if (typeof num == 'number') {
        if (Math.ceil(num) - num <= 0) {
                num = Math.abs(num)
                let result = 0;
                while (num) {
                    result = result * 10 + num % 10;
                    num = Math.floor(num / 10);
                }
                return result;
        } return "Value is not integer or NaN"
    } return "Invalid type of value"
}
console.log(reverse(-12853))