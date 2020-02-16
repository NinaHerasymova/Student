"use strict"

const maxIndex = (arr) => {
    let max = 0;
    if (arr.length > 0) {
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are comparable';
            }
            if (arr[i] > arr[max]) {
                max = i;
            }
        } return max;
    } return 'Array is empty'
}