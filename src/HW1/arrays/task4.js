
"use strict"
let arr=[23, 4, 789, 34, 8,90]
function maxIndex() {
    let max = 0;
    for (let i = 1; i<arr.length; i++) {
        if (arr[i]>arr[max]) {
            max = i;
        }
    }console.log(max);
}
maxIndex(arr);