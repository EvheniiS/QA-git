// Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.
/**
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * Сложность задачи: 1 of 5
  * @param {number} arraySize - размер массива
  * @param {?} value - значение для массива
  * @returns {Array}
*/

const fill = (arraySize, value) => {
new Array(arraySize).fill(value) 
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
 
// GPT Task fill()
https://chat.openai.com/share/3d950042-607b-4add-a546-1fb78908db09
#1 
arr = new Array(10).fill(0)

console.log(arr)

arr.fill(5,5,10)
console.log(arr)

//#2 
let checkerboard = Array(8).fill(null).map(() => Array(8).fill('O'));
console.log(checkerboard.length)
// Your code to create the checkerboard pattern goes here

for(let arr=0; arr < 8; arr++) {
  for(let column = 0; column < 8; column++){
    if((arr+column)% 2 === 0){
      checkerboard[arr][column] = "X"
    }
  }  
} 

// Printing the checkerboard
for (let row of checkerboard) {
    console.log(row.join(' '));
}

//GPT task reverse()

snacks = [5,'orange','watermelon','grape','cookie']
console.log(snacks)

const reversedSnacks = snacks.reverse().map(snacks => snacks + ' is good').join(',')
console.log(reversedSnacks)


//# 3 
// Create an Array of Numbers: Initialize an array with a sequence of numbers (e.g., 1 to 10).

// Reverse and Modify the Array: Reverse the array using the reverse() method. Then, use the map() method to multiply each number in the reversed array by its index in the array.

// Filter the Array: Use the filter() method to keep only the numbers that are even.

// Print the Results: Print the final modified array to the console.

// This task will help you practice chaining array methods (reverse(), map(), and filter()) and get more comfortable with array transformations in TypeScript. Give it a try, and if you need any hints or have questions, feel free to ask!

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
const multipliedNumbers = numbers.map((number, index) => number * index);
const evenNumbers = multipliedNumbers.filter(number => number % 2 === 0);



//GTP map()

// Create an Array of Objects: Each object should represent a person, with a name and age.

// Use map() to Transform the Array: Create a new array that contains a string for each person, in the format "Name is age years old", by transforming the original array.

// Print the New Array: Display the transformed array to see the results.

// This task will help you practice using map() on an array of objects, a common scenario in real-world applications. Give it a try, and if you need any assistance, I'm here to help!

persons = [

  {
    name:'Steven',
    age:23
  },
  {
    name:'jacob' ,
    age:29
  },
  {
    name:'Luke',
    age:null
  },
  {
    name:'Alexandr',
    age:100
  }
]
fileterPersons = persons.filter(person => typeof person.age === 'number' && !isNaN(person.age))
NewPersons = fileterPersons.map(person => `${person.name} is ${person.age} yeas old`)
const sortPersons = NewPersons.sort((a,b) => a.localeCompare(b))
console.log("🚀 ~ sortPersons:", sortPersons)






