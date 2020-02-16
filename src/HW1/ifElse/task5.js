"use strict"

const student = (rate) => {
    if (typeof rate == 'number') {
        let mark;
        switch (true) {
            case rate >= 0 && rate < 19: mark = 'F'; break;
            case rate > 20 && rate < 39: mark = 'E'; break;
            case rate > 40 && rate < 59: mark = 'D'; break;
            case rate > 60 && rate < 74: mark = 'C'; break;
            case rate > 75 && rate < 89: mark = 'B'; break;
            case rate > 90 && rate <= 100: mark = 'A'; break;
            default: return 'Unreal diapasone'
        }
        return mark
    } return "Invalid type of value"
}
