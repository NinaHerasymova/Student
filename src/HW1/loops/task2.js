"use strict"

const ifPrime = (num) => {
    if (num > 1) {
        num = parseInt(num);
        if ((num % 2 === 0) && (num !== 2))
            console.log("Composite");
        else if (num === 2)
            console.log("Prime");
        else {
            let k = Math.round(Math.sqrt(num));
            let flag = false;

            for (let i = 2; i < k + 1; i++)
                if (num % i === 0) {
                    console.log("Composite");
                    flag = true;
                    break;
                }

            if (flag === false)
                console.log("Prime");
        }
    } else {
        console.log('Wrong number!!!')
    }
}

ifPrime(7);