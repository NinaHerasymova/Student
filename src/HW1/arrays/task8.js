"use strict"

const viceVersa=(arr)=>{
    let half = arr.length/2; //if arr.lenght is not even, should be decided, where the odd number should be placed and use Math.floor() or Math.ceil()
    let arr1 = arr.splice(0, half);
    return(arr.concat(arr1));
}
