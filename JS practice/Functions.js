'user strict';
let num = 20
function showFirstMessage(text) {
    console.log(text)
    let num = 10;
}

showFirstMessage("hello World");
console.log("🚀 ~ file: Functions.js:6 ~ showFirstMessage ~ num:", num)


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3,5))
// console.log(calc(2,7))
// console.log(calc(10,7))

function ret () {
    let num = 50;
    
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () { 
    console.log("Hello")
};

logger()

const calc = (a, b) => {
    return a + b;
}


//! -------------------Currency exchange ------------------------------------------ 

let usdCurr = 38,
    eurCurr = 42,
    discount = 0.9;

function convert(curr, amount) {
    return curr * amount

}

convert(usdCurr, 500 );
convert(eurCurr, 500 );

function promotion (result){
    console.log(result * discount )
}
const res = convert(usdCurr, 500)
promotion(res)

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3 ) return 
    }
    console.log("Done")
}
test();

// proof that all function return undefined value 
function doNothing() {};
console.log(doNothing() === undefined)



//? 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
function sayHello(name) {
    return (`Привет  ${name}` )
}

//? 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}


//? 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i} ---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    return str;
}

console.log(getMathResult(2, 2))
