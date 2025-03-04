// JS is mainly consist of Data and Operations on Data

// There are mainly two types of Data Types in JS
// 1. Primitive Data Types
// 2. Non-Primitive Data Types or Object Data Types

// Primitive Data Types
// These are the basic data types in JS and are immutable

// 1. Number - It can be any integer or float value in JS
let num = 10;
console.log(num);
console.log(typeof num);

// 2. String - It is a sequence of characters in JS enclosed in single or double quotes or backticks (``)
let str = "Hello World";
console.log(str);
console.log(typeof str);

// 3. Boolean -  It can have only two values either true or false in JS
let bool = true;
console.log(bool);
console.log(typeof bool);

// 4. Undefined - It is a type of variable that does not have a value yet in JS means it is not assigned any value  yet
let und;
console.log(und);
console.log(typeof und);

// 5. Null - It is a type of variable that has a value of null in JS means it is assigned a value of null
let nul = null;
console.log(nul);
console.log(typeof nul);

// 6. Symbol - It is a unique and immutable data type in JS. It is mainly used to create unique keys in objects
let sym = Symbol();
console.log(sym);
console.log(typeof sym);

// Non-Primitive Data Types or Object Data Types
// These are the complex data types in JS and are mutable and can be changed  after creation  and are stored by reference in memory location

// 1. Object - It is a collection of key-value pairs in JS and is used to store complex data in JS.
let obj = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};

console.log(obj);
console.log(typeof obj);

// 2. Array - It is a collection of elements in JS and is used to store multiple values in JS.
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);

// 3. Function - It is a block of code that can be called by name in JS and is used to perform a specific task in JS.
let fun = function () {
  console.log("Hello World");
};

fun();
console.log(typeof fun);

// 4. Date - It is used to work with dates and times in JS.
let date = new Date();
console.log(date);
console.log(typeof date);

// 5. RegExp - It is used to work with regular expressions in JS.
let reg = /sagar/;
console.log(reg);
console.log(typeof reg);

// 6. Error - It is used to handle errors in JS.
let err = new Error("This is an error");
console.log(err);
console.log(typeof err);

// 7. Math - It is used to perform mathematical operations in JS.
console.log(Math.PI);
console.log(Math.sqrt(25));

// 8. JSON - It is used to work with JSON data in JS.
let json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);
