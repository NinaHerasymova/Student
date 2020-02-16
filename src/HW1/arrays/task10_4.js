
"use strict"

let arr = [-6, 22, -Infinity, 0, 65, 11, -117];
const heapSort = (arr) => {
    if (arr.length == 0) {
        return 'Array is empty';
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
            return 'Not all elements are comparable';
        }
    }
    createMaxHeap(arr);
    let endIndex = arr.length - 1;
    while (endIndex > 0) {
        swap(arr, 0, endIndex);
        heapify(arr, 0, endIndex);
        endIndex--;
    }
    return arr;
}
const createMaxHeap = (arr) => {   
        let startIndex = Math.floor(arr.length / 2);
        while (startIndex >= 0) {
            heapify(arr, startIndex, arr.length)
            startIndex--;
        }    
}
const heapify = (arr, index, maxIndex) => {
    while (index < maxIndex) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let largestValueIndex = index;
        if (leftChildIndex < maxIndex && arr[leftChildIndex] > arr[largestValueIndex]) {
            largestValueIndex = leftChildIndex;
        }
        if (rightChildIndex < maxIndex && arr[rightChildIndex] > arr[largestValueIndex]) {
            largestValueIndex = rightChildIndex;
        }
        if (index === largestValueIndex) {
            return;
        }
        swap(arr, index, largestValueIndex);
        index = largestValueIndex;
    }
}
const swap = (arr, indexA, indexB) => {
    let bufferValue = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = bufferValue;
}
console.log(heapSort(arr))