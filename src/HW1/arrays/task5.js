"use strict"

const oddSum = (arr) => {
    let sum = 0;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are numbers';
            }
            if (i % 2 == 1) {
                sum = sum + arr[i];
            }
        } return sum;
    } return 'Array is empty'
}