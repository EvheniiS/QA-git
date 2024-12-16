"use strict";

const str = "teSt";
const arr = [1, 2, 5]


// console.log(str[2]);
// console.log(arr.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"))


const logg = "Hello World !";
// console.log(logg.slice(6,11))
// console.log(logg.slice(6))
// console.log(logg.slice(-5,-1))
// console.log(logg.substring(6, 11))


//* second value points to how much you characters you want to cut off
console.log(logg.substr(6, 5)) 

//!methods of Numbers 

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));


console.dir(Number)