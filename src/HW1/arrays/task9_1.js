"use strict"
let arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

const bubbleSort = (arr)=> {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    console.log(arr);
};
bubbleSort(arr)