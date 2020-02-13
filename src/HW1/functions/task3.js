"use strict"

const wordsToNumber = (string) => {
    const re = /\s* \s*/;
    let string_arr = string.split(re);
    let first_digit;
    let second_digit;
    let third_digit;
    let fourth_digit;

    switch (string_arr[string_arr.length - 1]) {
        case 'one': fourth_digit = '1'; break;
        case 'two': fourth_digit = '2'; break;
        case 'three': fourth_digit = '3'; break;
        case 'four': fourth_digit = '4'; break;
        case 'five': fourth_digit = '5'; break;
        case 'six': fourth_digit = '6'; break;
        case 'seven': fourth_digit = '7'; break;
        case 'eight': fourth_digit = '8'; break;
        case 'nine': fourth_digit = '9'; break;
        case 'ten': fourth_digit = '10'; break;
        case 'eleven': fourth_digit = '11'; break;
        case 'twelve': fourth_digit = '12'; break;
        case 'thirteen': fourth_digit = '13'; break;
        case 'fourteen': fourth_digit = '14'; break;
        case 'fifteen': fourth_digit = '15'; break;
        case 'sixteen': fourth_digit = '16'; break;
        case 'seventeen': fourth_digit = '17'; break;
        case 'eighteen': fourth_digit = '18'; break;
        case 'nineteen': fourth_digit = '19'; break;
        case 'twenty': fourth_digit = '20'; break;
        case 'thirty': fourth_digit = '30'; break;
        case 'fourty': fourth_digit = '40'; break;
        case 'fifty': fourth_digit = '50'; break;
        case 'sixty': fourth_digit = '60'; break;
        case 'seventy': fourth_digit = '70'; break;
        case 'eighty': fourth_digit = '80'; break;
        case 'ninety': fourth_digit = '90'; break;
        case 'hundred': fourth_digit = '00'; break;
        default: fourth_digit = '';
    }
    switch (string_arr[string_arr.length - 2]) {
        case 'one': third_digit = '1'; break;
        case 'two': third_digit = '2'; break;
        case 'three': third_digit = '3'; break;
        case 'four': third_digit = '4'; break;
        case 'five': third_digit = '5'; break;
        case 'six': third_digit = '6'; break;
        case 'seven': third_digit = '7'; break;
        case 'eight': third_digit = '8'; break;
        case 'nine': third_digit = '9'; break;
        case 'twenty': third_digit = '2'; break;
        case 'thirty': third_digit = '3'; break;
        case 'fourty': third_digit = '4'; break;
        case 'fifty': third_digit = '5'; break;
        case 'sixty': third_digit = '6'; break;
        case 'seventy': third_digit = '7'; break;
        case 'eighty': third_digit = '8'; break;
        case 'ninety': third_digit = '9'; break;
        case 'hundred':
            if (parseInt(fourth_digit) <= 9) {
                third_digit = '0'
            } else { third_digit = '' }; break;
        default: third_digit = '';
    }
    switch (string_arr[string_arr.length - 3]) {
        case 'one': second_digit = '1'; break;
        case 'two': second_digit = '2'; break;
        case 'three': second_digit = '3'; break;
        case 'four': second_digit = '4'; break;
        case 'five': second_digit = '5'; break;
        case 'six': second_digit = '6'; break;
        case 'seven': second_digit = '7'; break;
        case 'eight': second_digit = '8'; break;
        case 'nine': second_digit = '9'; break;
        case 'hundred': second_digit = '0';
        default: second_digit = '';
    }
    switch (string_arr[string_arr.length - 4]) {
        case 'one': first_digit = '1'; break;
        case 'two': first_digit = '2'; break;
        case 'three': first_digit = '3'; break;
        case 'four': first_digit = '4'; break;
        case 'five': first_digit = '5'; break;
        case 'six': first_digit = '6'; break;
        case 'seven': first_digit = '7'; break;
        case 'eight': first_digit = '8'; break;
        case 'nine': first_digit = '9'; break;
        default: first_digit = '';
    }
    const result = first_digit + second_digit + third_digit + fourth_digit;
    console.log(result)
}
wordsToNumber("one hundred fourteen")