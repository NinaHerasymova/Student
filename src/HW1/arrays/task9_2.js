"use strict"
let arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

const selectionSort = (arr) =>{
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
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
    console.log(arr);
};
selectionSort (arr)

