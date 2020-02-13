"use strict"

const factorial = (num) => {
    let val = 1;

    for (let i = 2; i <= num; i++)
        val = val * i;
    console.log(val);
}


factorial(5)