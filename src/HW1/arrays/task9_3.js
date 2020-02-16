"use strict"

const insertSort = (arr) => {
    if (arr.length === 0) {
        return 'Array is empty';
    } 
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                return 'Not all elements are comparable';
            }
            let current = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = current;
        }
        return arr;
    
};
