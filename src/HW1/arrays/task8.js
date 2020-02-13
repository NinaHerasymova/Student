"use strict"
let arr=[1, 3,9,56, 560,506,45, 13, 28, 22];
function viceVersa(arr){
    let half = arr.length/2; //if arr.lenght is not even, should be decided, where the odd number should be placed and use Math.floor() or Math.ceil()
    let arr1 = arr.splice(0, half);
    console.log(arr.concat(arr1));
}
viceVersa(arr)