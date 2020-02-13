"use strict"
const ternar = (a, b) => {
    if(typeof a=='number'&typeof b=='number'){
    return ((a % 2 === 0)  ? a*b : a+b)
    }
    return "Invalid type of value"
}
