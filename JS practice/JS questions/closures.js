// Create a counter function which has increment and getValue functionality

//* Example of Closure , it is basically method of accessing variable of function outside of it ! AMAZING   
const privateSecret = () => {
    const secret = 'foo';

    return () => secret;
}

const getSecret = privateSecret();
console.log(privateSecret()); //* return value -  [Function (anonymous)]\
console.log(getSecret());//* return value -  foo



// const privateCounter = () => {
//     let count = 0;
//     return {
//         increment: (val = 1) => {
//             count += val;
//         },
//         getValue: () => {
//             return count;
//         }
//     }
// };

// const counter = privateCounter();
// console.log(counter.getValue())
// counter.increment();
// console.log(counter.getValue())

// console.dir(counter.getValue)