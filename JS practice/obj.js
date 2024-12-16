"use strict";
// const arr = ['a', 'b', 'c'];
// const arr0bj = {
//     a: 'a',
//     '1' : 'b',
//     2: 'C'
// }
// let b = 'b';
// // arr0bj.b = '1234';
// arr0bj [b] ='123'
// console.log (arr0bj['b']);

// console.log (b);
const options = {
    name: "test",
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.name);

// delete options.name;
// console.log(options);
//! - 

let counter = 0;
for(let key in options) {
    if (typeof(options[key]) === 'object'){
        for( let i in options[key] )
        console.log(`Property ${i} has value ${options[key][i]}`)
        counter++;

    }else{
        console.log(`Property ${key} has value ${options[key]}`)
        counter ++;
    }
}
console.log(counter)