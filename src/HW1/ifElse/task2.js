"use strict"

const axe = (x, y) => {
    if (typeof x == 'number' & typeof y == 'number') {
        if (x > 0 & y > 0) {
            return 'I'
        } else if (x < 0 & y > 0) {
            return 'II'
        } else if (x < 0 & y < 0) {
            return 'III'
        } else if (x > 0 & y < 0) {
            return 'IV'
        } else if (x == 0 & y == 0) {
            return ('In center')
        } else if (x == 0) {
            return ('On y axe')
        } else if (y == 0) {
            return ('On x axe')
        }
    } return "Invalid type of value"
}

