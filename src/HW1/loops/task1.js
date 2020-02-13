"use strict"

const evenSumm = () => {
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 99; i++)
        if (i % 2 == 0) {
            sum += i;
            counter++;
        }
    const res = 'Summ = ' + sum + '; ' + 'quantity = ' + counter;
    console.log(res)
}
evenSumm();