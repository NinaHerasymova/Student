// Data types//
////////////////////////////////////
let myNumber = 12345;
let myString = 'some string';
let myBool = true;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;

console.log('Data types: ', myNumber, myString, myBool, myNull, mySymbol, myUndef);

// Typeof//
////////////////////////////
console.log('Type of variable: ', typeof function a() { }, typeof [], typeof null);

//Data types. Number////
/////////////////////////////////
console.log('Целочисленные формы записи: ', 10, 0xfffcc, 0o345, 0o1234, 12.45, .89, 1.24e4);
console.log('Not-A-Number: ', 0 / 0, Infinity / Infinity, Math.sqrt(-10), NaN === NaN);
console.log('Infinity: ', 1 / 0, -1 / 0);

let number = 6300;
let newNumber = new Number(4000);
console.log('Тип переменной: ', typeof number, 'Тип переменной, созданной с помощью конструктора:', typeof newNumber);
console.log('Округляем до двух знаков после запятой:', newNumber.toFixed(2), number.toFixed(2));

// Arithmetic operators//
///////////////////////////
let count = 10;
console.log('Префиксный инкремент: ', ++count);
console.log('Результат: ', count);
console.log('Постфиксный инкремент: ', count++);
console.log('Результат: ', count);

let variable = 100;
variable = variable + 20;
let anotherVariable = 25;
anotherVariable = anotherVariable * 4;
console.log('Унарное присваивание: ', variable, 'Унарное умножение: ', anotherVariable);
console.log('Бинарное присваивание: ', variable += 20);
console.log('Бинарное присваивание: ', anotherVariable *= 4);

console.log('Логическое true или false, 5<10:', 5 < 10);
console.log('Логическое true или false, 5>10:', 5 > 10);
console.log('Логическое true или false, 10>=10:', 10 >= 10);
console.log('Логическое true или false, 8<=10:', 8 <= 10);
console.log('Сравнение на равенство 10===10:', 10 === 10);
console.log('Сравнение на равенство (с инверсией) 10!==10:', 10 !== 10);
console.log('Сравнение на равенство 10=="10" без приведения типов:', 10 == "10")
console.log('Сравнение на равенство 10==="10" с приведением типов:', 10 === "10")
console.log('Ошибка округления', 0.2 + 0.1)

// Data types. String//
////////////////////////////////////
console.log('Разные кавычки: ', "string", 'newString', `anotherString`);
console.log('Экранирование: ', "this is my string", "this is my \"string\"");
let myArrString = "new string";
console.log("Строки могут интерпретироваться как массивы:", myArrString[2]);

//Data types. Boolean///
//////////////////////////////
console.log('Сравнение на равенство 5 и 6:', 5 === 6, 'Сравнение на равенство 5 и 5:', 5 === 5);
console.log('Преобразование разных типов данных в Boolean: ', Boolean(0), Boolean(-0), Boolean(""), 
    Boolean(null), Boolean(undefined),  Boolean(NaN), Boolean([]), Boolean({}));

// Logical operators///
/////////////////////////
let operate = 5;
console.log(operate && 10 + operate);
let prevString = "my String";
let newString = prevString || "default";

//Варианты получения undefined//
/////////////////////////////
let temp;
let obj = {};
let ar = [1, 2, 3];
const func = () => { return; };
console.log(temp, obj.property, ar[3], func());


//Сравнение на равенство  null и undefined///
/////////////////////////////////
console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

//Data types. Symbol///
///////////////////////

let symbol = Symbol();
console.log('Вызов символа по названию переменной: ', symbol);
console.log('Вызов типа перменной: ', typeof symbol);

let symbol2 = Symbol('name');
console.log('Имя символа: ', symbol2);
let anotherSymbol = Symbol('name');
console.log('Аналогично созданный символ: ', anotherSymbol);
console.log('Проверка на равенство двух одинаково созданных символов: ', symbol2 === anotherSymbol);

let symbol3 = Symbol.for('name');
console.log('Символ, созданный с помощью метода “for”: ', symbol3);
let anotherSymbol2 = Symbol.for('name');
console.log('Сравним символы, созданные с помощью "for": ', symbol3 === anotherSymbol2);
let symbol4 = Symbol.for('name');
let name = Symbol.keyFor(symbol4);
console.log('Рассмотрим метод “keyFor”:', name);

let user = { userName: 'Vasya', [Symbol('password')]: 'asdf' }
console.log('Обращение к свойству \'userName\': ', user.password);
console.log('Обращение к ключам объекта: ', Object.keys(user));
console.log('Обращение к свойству \'userName\' через \'getOwnPropertyName\' : ', Object.getOwnPropertyNames(user));
let password = user[Symbol.for('password')];
console.log('Обращение к свойству \'password\', созданному с помощью \'for\' : ', password); 


//Data types. Objects//
//////////////////////////

var newObject = Object.create({ x: 20, y: 30 });
newObject.x = 40;
console.log('Метод hasOwnProperty: ', newObject.hasOwnProperty('x'));
console.log('Обращение к свойству: ', newObject.x);
console.log('Проверка наличия свойства "х" (есть  в данном объекте): ', 'x' in newObject);
console.log('Проверка наличия свойства "z" (нету в данном объекте): ', 'z' in newObject);
console.log('Обращение к существующему свойству "х": ', newObject.x);
console.log('Обращение к несуществующему свойству "z": ', newObject.z);
delete newObject.x;
console.log('Объект с удаленным свойством: ', newObject);
console.log('Обращение к несуществующему свойству "z": ', newObject.z);
console.log('Проверка наличия свойства "z" (нету в данном объекте): ', 'z' in newObject);
newObject.z = undefined;
console.log('Обращение к свойству "z" (\'undefined\' установлен вручную): ', newObject.z);
console.log('Обращение к свойству "z" (\'undefined\' установлен вручную): ', 'z' in newObject);

//Data types. Cycles//
/////////////////////////
//for(;;) console.log('Бесконечный цикл который выводит а: ','a')
for (var i = 0; i < 10; i++)
    console.log('Цикл с инкрементом: ', i);
for (var i = 10; i--;)
    console.log('Цикл с декрементом: ', i);

var i = 0;
while (i < 10) console.log('Цикл while с условием :', i++);

//while(i--) console.log('Цикл while с инкрементом :', i++) ;

//Data types. Functions//
////////////////////////
function myFunc(name) {
    return 'Hello, ' + name;
}
console.log('Function declaration:', myFunc('hgj'));
var myFunc = function (name) {
    return 'Hello, ' + name;
}
console.log('Function expression:', myFunc('hgj'));

console.log('typeof yourFunc :', typeof yourFunc);
console.log('typeof String: ',typeof String);
console.log('typeof new String(): ',typeof new String());