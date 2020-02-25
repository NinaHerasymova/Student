function AList(elem) {
    this.defaultArray = elem;
    this.array = [];
    this.init();
}
AList.prototype.init = function () {
    let index = 0;
    while (this.defaultArray[index] !== undefined) {
        this.array[index] = this.defaultArray[index];
        index++;
    }
    return this.array;
}

//------Методы----------////

AList.prototype.size = function () {
    let index = 0;
    while (this.array[index] !== undefined) {
        index++
    }
    return index;
}

AList.prototype.addStart = function (element) {
    for (let i = this.size() - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i]
    }
    this.array[0] = element;
    return this.size();
}


AList.prototype.addEnd = function (element) {
    this.array[this.size()] = element;
    return this.size();
}


AList.prototype.delStart = function () {
    let subArr = [];
    let del;
    for (let i = 1; i < this.size(); i++) {
        subArr[i - 1] = this.array[i];
        del = this.array[0];
    }
    this.array = subArr;
    return del;
}


AList.prototype.delEnd = function () {
    let subArr = [];
    let del;
    for (let i = 0; i < this.size() - 1; i++) {
        subArr[i] = this.array[i];
        del = this.array[this.size() - 1]
    }
    this.array = subArr;
    return del;
}


AList.prototype.delPosition = function (element) {
    let subArr = [];
    let del;
    for (let i = 0; i < this.size() - 1; i++) {
        if (i < element && this.array[i]) {
            subArr[i] = this.array[i];
        } else if (i >= element) {
            subArr[i] = this.array[i + 1];
            del = this.array[element]
        }
    }
    this.array = subArr;
    return del;
}


AList.prototype.get = function (index) {
    let gotten;
    for (let i = 0; i < this.size(); i++) {
        if (i == index) {
            gotten = this.array[i];
            return gotten;
        }

    }
}


AList.prototype.set = function (index, value) {
    let put = [];
    if (index > this.size()) {
        return;
    }
    for (let i = 0; i < this.size(); i++) {
        if (i == index) {
            put[i] = value;
        } else {
            put[i] = this.array[i];
        }
    }
    this.array = put;
    return this.array;
}


AList.prototype.toString = function () {
    let str = '';
    for (let i = 0; i < this.size(); i++) {
        str += this.array[i];
    }
    return str;
}


AList.prototype.clear = function () {
    this.init();
    return this.array;
}

AList.prototype.min = function () {
    let minEl = this.array[0];
    for (let i = 0; i < this.size(); i++) {
        if (this.array[i] < minEl) {
            minEl = this.array[i];
        }
    }
    return minEl;
}


AList.prototype.max = function () {
    let maxEl = this.array[0];
    for (let i = 0; i < this.size(); i++) {
        if (this.array[i] > maxEl) {
            maxEl = this.array[i];
        }
    }
    return maxEl;
}


AList.prototype.sort = function () {
    for (let i = 0, endI = this.size() - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (this.array[j] > this.array[j + 1]) {
                let swap = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = swap;
            }
        }
    }
    return this.array;
}

AList.prototype.maxIndex = function () {
    let maxIn = 0;
    for (let i = 0; i < this.size(); i++) {
        if (this.array[i] > this.array[maxIn]) {
            maxIn = i;
        }
    }
    return maxIn;
}
AList.prototype.minIndex = function () {
    let minIn = 0;
    for (let i = 0; i < this.size(); i++) {
        if (this.array[i] < this.array[minIn]) {
            minIn = i;
        }
    }
    return minIn;
}


AList.prototype.reverse = function () {
    let res = [];
    let k = 0;
    for (let i = this.size() - 1; i >= 0; i--) {
        res[k] = this.array[i];
        k++;
    }
    return res;
}


AList.prototype.halfReverse = function () {
    let subArr = [];
    let leng = this.size();
    let i = 0;
    if (leng % 2 == 0) {
        while (i < leng / 2) {
            subArr[i] = this.array[leng / 2 - 1 - i];
            i++;
        }
        while (i < leng) {
            subArr[i] = this.array[leng + leng / 2 - 1 - i];
            i++;
        }
    }
    else {
        while (i < leng / 2 - 0.5) {
            subArr[i] = this.array[leng / 2 - 1.5 - i];
            i++;
        }
        while (i == leng / 2 - 0.5) {
            subArr[i] = this.array[i];
            i++;
        }
        while (i < leng) {
            subArr[i] = this.array[leng + leng / 2 - 0.5 - i];
            i++;
        }
    }
    this.array = subArr;
    return this.array;
}


const arr_size = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_start = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_end = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_delStart = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_delEnd = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_delPos = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_get = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_set = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_string = new AList([120, 8, 22, 344, 86, 10, 114]);
const arr_clear = new AList([2, 4, 6, 8, 10, 12, 14]);
const arr_min = new AList([-120, -8, 22, 344, 86, -10, 114]);
const arr_max = new AList([120, -8, 22, 344, 86, -10, 114]);
const arr_sort = new AList([120, -8, 22, 344, 86, -10, 114]);
const arr_maxIn = new AList([120, -8, 22, 344, 86, -10, 114]);
const arr_minIn = new AList([120, -8, 22, 344, 86, -10, 114]);
const arr_reverse = new AList([120, -8, 22, 344, 86, -10, 114]);
const arr_halfReverse = new AList([1, 2, 3, 4, 5, 6, 7]);

