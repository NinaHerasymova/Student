"use strict"

const maxEl = (arr) => {
    let max = arr[0];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are comparable';
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        } return max;
    } return 'Array is empty'
}