"use strict"

let arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

const shellSort =(arr)=> {
    for (let h = arr.length; h > 0; h = parseInt(h/2)) {
        for (let i = h; i < arr.length; i++) {
            let k = arr[i];
            for (var j = i; j >= h && k < arr[j - h]; j -= h)
                arr[j] = arr[j - h];
            arr[j] = k;
        }
    }
    console.log(arr);
}
 shellSort(arr)