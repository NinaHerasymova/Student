
"use strict"

const minEl = (arr) => {
    let min = arr[0];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are comparable';
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        } return min;
    }return 'Array is empty'
}