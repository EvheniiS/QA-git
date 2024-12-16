// for (let i = 0; i < 3; i++){
//     console.log('i value is ',i);
//     for(let j = 0; j < 3;j++) {
//         console.log('j value is ',j)
//     }
// }

let result = '';
const length = 6;

for (let i = 1; i < length; i++) {
    
    for(let j = 0; j <i; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++){
    console.log(`first level: ${i}`);
    for(let j = 0; j < 3;j++) {
        console.log(`Second level: ${j}`)
        for(let k = 0; k < 3; k++) {
            if(k === 2) continue first;
            console.log(`Third level ${k}`)
        }
    }
}

//? #1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
    for(let i = 5; i <= 10; i++){
        console.log(i)
    }
 };

//? 2 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
    for(let i = 20; i >= 10; i--){
        if( i === 12) brake
    console.log(i)
    } 
};

//? При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
    for(let i = 2; i <= 10; i++){
        if (i % 2 == 0) {
    console.log(i)
        }
    }
}



///? Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//? Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    let i = 2
        while (i <= 16) {
            if (i % 2 === 0) {
                i++
                continue;
            } else {
                console.log(i);
            }
            i++
        }
    }