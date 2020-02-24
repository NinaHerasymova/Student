"use strict"

const viceVersa=(arr)=>{
    let half = arr.length/2; 
    let arr1 = arr.splice(0, half);
    return(arr.concat(arr1));
}
