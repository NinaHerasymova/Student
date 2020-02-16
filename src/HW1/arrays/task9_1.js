"use strict"

const bubbleSort = (arr) => {
    if (arr.length > 0) {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                    return 'Not all elements are comparable';
                }
                if (arr[j] > arr[j + 1]) {
                    let swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
        return arr;  
    }return 'Array is empty';
};
