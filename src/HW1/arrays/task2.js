"use strict"
let arr=[23, 4, 789, 34, 8,90]
function maxEl(arr){

    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }console.log(max);
}
maxEl(arr)