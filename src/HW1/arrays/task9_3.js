"use strict"
var arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

const insertSort = (arr)=> {
    for (let i = 1, l = arr.length; i < l; i++) {
        let current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    console.log(arr);
};
insertSort (arr)