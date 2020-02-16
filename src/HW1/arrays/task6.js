"use strict"

const reverse = (arr) => {

    if (arr.length > 0) {
        var res = [];
        var k = 0;
        for (var i = arr.length - 1; i >= 0; i--)
        {
         res[k] = arr[i];
         k++;
        }
        return res;
    } return 'Array is empty';

}
console.log(reverse(['-6','', 'null', 'NaN', 'Infinity', '65', '11']))