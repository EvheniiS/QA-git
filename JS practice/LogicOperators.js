// const hamburger = 5;
//       fries = 0;

// if(hamburger && fries) {
//     console.log('I ate good!');
// }else{
//     console.log('I`m starving ! ')
// }


// const hamburger = 3,
//       fries = 1,
//       cola = 1;

// // console.log(1 && 0);
// // console.log(1 && 5 );
// // console.log(null && 5 );
// // console.log(0 && 'sdasdasd');

// if(hamburger === 3 && cola === 1 && fries ) {
//     console.log('Everyone ate good!');
// }else {
//     console.log('We are leaving this place :( ')
// }

const hamburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;

if(hamburger === 3 && cola === 2 || nuggets && fries === 3  ) {
    console.log('Everyone ate good!');
}else {
    console.log('We are leaving this place :( ')
}

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport)


console.log(!0);


// Home work - What we will have in console log ? 
console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ) //NaN

console.log( 1 && 2 && 3 ); //!1 - 3 

console.log( !1 && 2 || !3 ); //!2 - FALSE 

console.log( 25 || null && !3 ); //25

console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5 

console.log( 5 === 5 && 3 > 1 || 5); //true