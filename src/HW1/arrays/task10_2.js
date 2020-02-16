"use strict"

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
            return 'Not all elements are comparable';
        }
    }
    let middle = arr.length / 2;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) => {
    let result = [];
    while (left.length || right.length) {
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if (left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result;
}