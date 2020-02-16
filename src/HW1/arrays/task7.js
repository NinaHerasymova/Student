"use strict"

const oddElSum = (arr) => {
    let count = 0;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true||(arr[i]==Infinity||(arr[i]==-Infinity))) {
                return 'Not all elements are comparable';
            } if (arr[i] % 2 !== 0) {
                count++;
            } 
        }return count;
    }return 'Array is empty';
}
