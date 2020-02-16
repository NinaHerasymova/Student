"use strict"

const numberToWords = (n) => {
    let letters=/[a-z]/i;
    let prov=letters.test(n);
    if (typeof n=='number'& n!==Infinity&isNaN(n)==false){
        n=String(n);
    }else if(prov==true||typeof n !=='string'||n.length==0){
        return 'Invalid type of value'
    }
    let string = n, units, tens, start, end, chunks, chunksLen, chunk, ints, i, word, words;
    let and = 'and';
    if (string === '0') {
       return 'zero';
    }
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
    chunksLen = chunks.length;
    words = [];
    for (let i = 0; i < chunksLen; i++) {
        chunk = parseInt(chunks[i]);
        if (chunk) {
            ints = chunks[i].split('').reverse().map(parseFloat);
            if (ints[1] === 1) {
                ints[0] += 10;
            }
            if ((word = units[ints[0]])) {
                words.push(word);
            }
            if ((word = tens[ints[1]])) {
                words.push(word);
            }
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        } return(words.reverse().join(' '));
    }
}
