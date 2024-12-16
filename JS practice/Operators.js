"user strict";

console.log(4 + ' - object');
console.log('arr' + ' - object');

// Унарный плюс 
console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;
// decr--;
// ++incr;
// --decr

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 != 8);


const isChecked = true,
      isClose = false;

console.log(isChecked && isClose );
console.log(isChecked || !isClose );