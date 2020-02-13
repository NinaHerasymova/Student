"use strict"

const sqrt = (num) => {
    if (num >= 0) {
        let root = 0;
        while (root * root <= num) {
            root++
        }
        const res = root - 1;
        console.log('Root approx = ', res)
    } else { console.log("Number is not natural!!!!") }
}
sqrt(37)