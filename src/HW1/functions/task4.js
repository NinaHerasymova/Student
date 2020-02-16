"use strict"

const distance = (x1, y1, x2, y2) => {
    if(typeof x1!=='number'||typeof x2!=='number'||typeof y1!=='number'||typeof y2!=='number'||
    isNaN(x1)==true||isNaN(x2)==true||isNaN(y1)==true||isNaN(y2)==true){
        return'Invalid type of value';
    }
    let result = (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))).toFixed(2);
    return result;
}
