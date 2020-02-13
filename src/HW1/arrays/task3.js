"use strict"

let arr=[23, 4, 789, 34, 8,90]
function minIndex() {
    let min = 0;
    for (let i = 1; i<arr.length; i++) {
        if (arr[i]<arr[min]) {
            min = i;
        }
    }console.log(min);
}
minIndex(arr);