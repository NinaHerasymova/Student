//----This----///////

// function foo() {
//     this.value = 5;
//     console.log(this === window);
//     }
//     foo()


//---Arrays--///
var fruits = ['element0', 'element4', 'element5', 'element6', 'element7', 'element8'];
var fruits1 = new Array('element0', 'element1', 'element5', 'element6');
var fruits2 = new Array(5);
console.log('Варианты создания массива ', fruits, fruits1, fruits2);

var arr = [99, 'Name', { city: 'Boston' }, true, [1, 2, 3]];
console.log('Разные типы данных в массиве: ', arr);

//--Методы массивов---///

var values = [5, 8];
values.push(7); values.push(3);
var lastElement = values.pop();
values.unshift(9); values.unshift(2);
var firstElement = values.shift();
console.log('Исходный массив: [5, 8];',
    '|| Массив после метода "push" (values.push(7); values.push(3)): [7, 5, 8, 3];',
    '|| Массив после метода "shift": ', firstElement,
    '|| Массив после метода "pop": ', lastElement,
    '|| Массив после метода "unshift" (values.unshift(9); values.unshift(2)): ', values.unshift(9), values.unshift(2));

console.log('Метод "of" для Array.of(1, 2, 3)): ', Array.of(1, 2, 3));
console.log('Метод "isArray" для Array.isArray(1, 2, 3): ', Array.isArray(1, 2, 3));
console.log('Метод "isArray" для Array.isArray([1, 2, 3])): ', Array.isArray([1, 2, 3]));
console.log('Метод "from"  для Array.from(obj, mapFn, thisArg, где thisArg - this для mapFn (коллбек map)),  Array.from([1, 2, 3], x => x + x: )', Array.from([1, 2, 3], x => x + x));

var values0 = [3, 9, 15, -5, 12];
console.log('Метод "find()" для var values = [3, 9, 15, -5, 12], element > 13', values0.find(element => element > 13));
console.log('Метод "findIndex()" для var values = [3, 9, 15, -5, 12], element > 13', values0.findIndex(element => element > 13));

var values1 = [2, 9, 9];
console.log('Метод includes() для values1 = [2, 9, 9], values1.includes(2), values.includes(7):', values1.includes(2), values1.includes(7));
console.log('Метод indexOf() для values1 = [2, 9, 9],  values1.indexOf(9)', values1.indexOf(9), values1.indexOf(7));
console.log('Метод lastIndexOf() для values1 = [2, 9, 9]', values1.lastIndexOf(9), values1.lastIndexOf(7));

var words = ['number', 'string', 'symbol', 'object', 'undefined'];
console.log('Исходный массив: var words = ["number", "string", "symbol", "object", "undefined"]');
console.log('Метод filter() для words.filter(word => word.length > 6)):', console.log(words.filter(word => word.length > 6)));

var values0 = [1, 2, [3, 4, [5, 6]]];
console.log('Метод flat() для var values0 = [1, 2, [3, 4, [5, 6]]: ', values0.flat());
console.log('Метод flat(2) для var values0 = [1, 2, [3, 4, [5, 6]]: ', values0.flat(2));

var chars = ['a', 'b', 'c'];
console.log('Метод forEach() для var chars = ["a", "b", "c"] - chars.forEach(element => console.log(element)): ', chars.forEach(element => console.log(element)));


var numbers3 = [1, 4, 9, 16];
console.log('Метод map() для var numbers3 = [1, 4, 9, 16]', (numbers3.map(x => x * 2)));

var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('Метод reduce() - для numbers.reduce(reducer), где var reducer = (accumulator, currentValue) => accumulator + currentValue; : ', numbers3.reduce(reducer));
console.log('Метод reduce() - для numbers.reduce(reducer, 5):', numbers3.reduce(reducer, 5));

var values = [1, 2, 3, 4, 5];
console.log('Метод every() - для var values = [1, 2, 3, 4, 5],  values.every(element => element % 2 === 0));', values.every(element => element % 2 === 0));
console.log('Метод every() - для var values = [1, 2, 3, 4, 5],  values.every(element => element >10));', values.every(element => element > 10));
console.log('Метод some() - для var values = [1, 2, 3, 4, 5],  values.some(element => element % 2 === 0));', values.some(element => element % 2 === 0));
console.log('Метод some() - для var values = [1, 2, 3, 4, 5],  values.some(element => element > 2));', values.some(element => element > 2));

console.log('Метод concat() для  ["a", "b", "c"].concat(["d", "e", "f"]', ["a", "b", "c"].concat(['d', 'e', 'f']));
console.log('Метод concat() для ["a", "b", "c"].concat(5)', ['a', 'b', 'c'].concat(5));

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('Метод slice() для  ["ant", "bison", "camel", "duck", "elephant"], animals.slice(2)', animals.slice(2));
console.log('Метод slice() для  ["ant", "bison", "camel", "duck", "elephant"], animals.slice(1,5)', animals.slice(1, 5));
console.log('Метод slice() для  ["ant", "bison", "camel", "duck", "elephant"], animals.slice(2,4)', animals.slice(2, 4));

var arr = ["a", "b", "c"];
arr.splice(1, 1);
console.log('Метод splice() для ["a", "b", "c"]', arr);

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log('Метод splice() для ["Jan", "March", "April", "June"], months.splice(1, 0, "Feb"): ', months);
months.splice(4, 1, 'May');
console.log('Метод splice() для ["Jan", "March", "April", "June"], months.splice(4, 1, "May"): ', months);

var values5 = [1, 2, 15];
console.log('Метод sort() для [ 1, 2, 15 ]: ', values5.sort());

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Многмерный массив var matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ], обращение к элементу matrix[1][1]: ', matrix[1][1]);

var array = [];
array[10] = "";
console.log('Длина массива - последний индекс+1: ', array.length);

////---------Objects---------------//

var object = new Object();
var object1 = Object.create(null);
var object2 = {};

console.log('Три способа создать объект: ', object, object1, object2);


//----Функция - конструктор-------//
var Human = function (name) {
    this.name = name;
}
Human.prototype.anyMethod = function () {
    console.log(this.name + " do something...");
}
var man = new Human("Vasya");
var woman = new Human("Kasya");
console.log(man.name, " ", woman.name);
man.anyMethod(); woman.anyMethod();

console.log(man.constructor);
console.log(Human.prototype.constructor);

console.log(man instanceof Human);
console.log(Human.prototype.isPrototypeOf(man));

var Developer = function (name, skills) {
    Human.apply(this, arguments);
    this.skills = skills || [];
};
Developer.prototype = Object.create(Human.prototype);
Developer.prototype.constructor = Developer;
var developer = new Developer("Petya", ["JavaScript", "Node.js", "Java"]);
console.log(developer.name);
console.log(developer.skills);
developer.anyMethod();

console.log('Оператор instanceof: ', developer instanceof Developer); // true
console.log('Оператор instanceof: ', developer instanceof Human); // true

console.log(developer.toString()); // [object Object] - переопределим его
Human.prototype.toString = function () { return this.name };


//---------Функция-конструктор------------///
var Human = function (name, born, city) {
    this.name = name;
    this.born = born;
    this.city = city;
    getAge = function () {
        return new Date().getFullYear() = this.born
    }
}
Human.prototype.getAge = function () {
    console.log(new Date().getFullYear = this.born);
}
var user = new Human("Name", 1985, "Boston");
user.getAge();