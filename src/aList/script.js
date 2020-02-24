let AList = function(array) {
    this.defaultArray = array;
    this.array = [];
    this.init();

};

AList.prototype.init = function() {

    let i = 0;
    while (this.defaultArray[i]) {
        this.array[i] = this.defaultArray[i];
        i++;
    }
    return this.array;
};

AList.prototype.size = function() {
    let i = 0;
    while (this.array[i]) {
        i++;
    }
    return i;
};

AList.prototype.addStart = function(element) {
    for (let i = this.size() - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i]
    }

    this.array[0] = element;
    return this.array;
};

AList.prototype.addEnd = function(element) {
    this.array[this.size()] = element;
    return this.array;
};

AList.prototype.delStart = function() {
    let copyArray = [];
    for (let i = 1; i < this.size(); i++) {
        copyArray[i - 1] = this.array[i];
    }
    this.array = copyArray;
    return this.array;
};

AList.prototype.delEnd = function() {
    let copyArray = [];
    for (let i = 0; i < this.size() - 1; i++) {
        copyArray[i] = this.array[i];
    }
    this.array = copyArray;
    return this.array;
};

AList.prototype.delPosition = function(index) {
    let copyArray = [];
    let j = 0;
    for (let i = 0; i < this.size(); i++) {
        if (i === index) {
            i - index;
        } else {
            copyArray[j] = this.array[i];
            j++;
        }
    }
    this.array = copyArray;
    return this.array;
};

AList.prototype.get = function(index) {
    for (let i = 0; i < this.size(); i++) {
        if (i == index) {
            return this.array[i];
        }

    }

};

AList.prototype.set = function(index, element) {
    let copyArray = [];
    let j = 0;
    for (let i = 0; i < this.size() + 1; i++) {
        if (i === index) {
            copyArray[i] = element;
        } else {
            copyArray[i] = this.array[j];
            j++;
        }
    }
    this.array = copyArray;
    return this.array;
};

AList.prototype.toString = function() {
    let toString = "";
    for (let i = 0; i < this.size(); i++) {
        if (this.array) {
            toString += ' ' + this.array[i];
        }
    }
    return toString;
};


let aList = new AList([1, 2, 3, 4]);

console.log(aList.array);
console.log(aList.init());
console.log(aList.size());

console.log(aList.addStart(4));
console.log(aList.size());

console.log(aList.addEnd(6));
console.log(aList.size());

console.log(aList.delStart());
console.log(aList.size());

console.log(aList.delEnd());
console.log(aList.size());

console.log(aList.delPosition(2));
console.log(aList.size());

console.log(aList.get(2));

console.log(aList.set(2, 20));
aList.init();
console.log(aList.toString());