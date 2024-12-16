//?  What will be logged in the first example and in second example ? 

// booth undefined
let var1;
console.log(var1);
console.log(typeof var1);


let var2 = null; 
console.log(var2); // null
console.log(typeof var2); // object - well know bug 


//? what will  be console.logged here

//#1
console.log(foo);
foo = 1;
//? Error 

//#2
console.log(foo);
var foo = 2;
//? undefined - because of "var" hoisting 

//#3
foo = 3;
console.log(foo);
var foo;
//? 3 - because of "var" hoisting

foo()
function foo() {}
//No errors 