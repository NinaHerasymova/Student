"use strict"

const shellSort = (arr) => {
    if (arr.length > 0) {
        for (let h = arr.length; h > 0; h = parseInt(h / 2)) {
            for (let i = h; i < arr.length; i++) {
                let k = arr[i];
                if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
                    return 'Not all elements are comparable';
                }
                for (var j = i; j >= h && k < arr[j - h]; j -= h)
                    arr[j] = arr[j - h];
                arr[j] = k;
            }
        }
        return arr;
    }return 'Array is empty';
}