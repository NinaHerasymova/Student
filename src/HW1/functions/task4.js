"use strict"

const distance = (a1, b1, a2, b2) => {
    let result = Math.sqrt((a1 - a2) * (a1 - a2) + (b1 - b2) * (b1 - b2));
    console.log(result)
}
distance(6, -5, 15, 33);