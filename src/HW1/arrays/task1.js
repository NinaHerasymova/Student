
"use strict"
let arr=[23, 4, 789, 34, 8,90]
function minEl(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min= arr[i];
        }
    }console.log(min);
}
minEl(arr)