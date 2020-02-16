"use strict"
const evenSumm = (start, end) => {
    if (typeof start == 'number' & typeof end == 'number') {
        if (Math.ceil(start) - start <= 0 & Math.ceil(end) - end <= 0) {
            if(start>=end||end==0){
                return 'Unreal diapasone'
            }
            if (start >= 0 & end >= 0) {
                let counter = 0;
                let sum=0;
                for (let i = start; i <= end; i++)
                    if (i % 2 == 0) {
                        sum += i;
                        counter++;
                    }
                const res = 'Summ = ' + sum + '; ' + 'quantity = ' + counter;
                return res;
            } return 'Number is not natural';
        } return 'Value is not integer or NaN';
    } return 'Invalid type of value';
};

