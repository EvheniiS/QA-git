"use strict";


// while (num <= 55 ) {

//     console.log(num);
//     num++
// };


// do {
//     console.log(num);
//     num++
// }
// while(num < 55);
let num = 50;

for (let i = 1; i < 11; i++) {
    if(i === 6) {
        // break;
        continue;
    } 
    console.log(i);
}

//! example of using property(element) in for Loop
const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Engineer'
  };
  
  // Using a for...in loop to iterate over object properties (elements)
  for (const property in person) {
    const value = person[property];
    console.log(`${property}: ${value}`);
  }


//? # 1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
    let num = 4
    while (num < 10) {
        num++
        console.log(num);
        
    }
}

//? #2 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i > 10; i--){ 
    if (i === 13) {
        break;
    }
    console.log(i)
}

//? #3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

for( let i = 2; i <= 10; i++ ){
    if ( i % 2 === 0){
        console.log(i)
    }
}


//? #4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }

function fourthTask() {
    let num = 2
    while(num < 16 ) {
        num++
        if(num % 2 === 0 ) {
            continue;
        }else {
            console.log(num)
        }
        num++
    }
}

// #5 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
function fifthTask() {
    const arrayOfNumbers = [];
    let value = 5,
        arrayCount = 0;
    do{
        arrayOfNumbers[arrayCount] = value;
        arrayCount++
        value++
    }
    while (value <= 10) 

    console.log(arrayOfNumbers);

    return arrayOfNumbers;
} 


//! More advnce use of cycles 

//? #1 Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Место для первой задачи
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    arr.forEach(element => {
        result.push(element)
    })
    // Не трогаем
    return result;
}


//? #2 Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//? Для определения типа данных используйте typeof();
//? Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    data.forEach((element,index) => {
        if (typeof element === 'number'){
        data[index] *= 2  
        }else if (typeof element === 'string'){  
            data[index] += ` - done`
        }
        })
    console.log(data)
    // Не трогаем
    return data;
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }
    
    // Не трогаем
    return result;
}
///нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 1; i < lines ;i++ ){

    for( k = 0; k < i; k++){
        result += "*";
    }
    result +='\n'
}

console.log(result)