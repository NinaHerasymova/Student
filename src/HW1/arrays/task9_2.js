"use strict"

const selectionSort = (arr) => {
    if (arr.length > 0) {
        for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are comparable';
            }
            let indexMin = i;            
            for (let j = i + 1; j < l; j++) {
                if (arr[indexMin] > arr[j]) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
            }
        }
        return arr;
    }return 'Array is empty';
    
}

