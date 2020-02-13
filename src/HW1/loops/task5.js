"use strict"

const digitSumm = (num) =>{

    let result = 0;
    for (let i = 0; i < num.length; i++)
        result += Number(num[i]);
    console.log(result);
}

digitSumm('127')