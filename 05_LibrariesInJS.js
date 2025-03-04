// Libraries In JS are the collection of functions and methods that can be used to perform a specific task in JS. There are mainly 3 types of Libraries In JS:

// 1. Math Library - It is used to perform mathematical operations in JS.
let num1 = 10;
let num2 = 20;
let sum = Math.max(num1, num2); // This will give the maximum number in JS
console.log(sum);

let num3 = 20;
let num4 = 10;
let sub = Math.min(num3, num4); // This will give the minimum number in JS
console.log(sub);

let num5 = 10;
let num6 = 20;
let mul = Math.pow(num5, num6); // This will give the power of the number in JS
console.log(mul);

let num7 = 20;
let num8 = 10;
let div = Math.sqrt(num7, num8); // This will give the square root of the number in JS
console.log(div);

let num9 = 20;
let num10 = 10;
let mod = Math.abs(num9, num10); // This will give the absolute value of the number in JS
console.log(mod);

let num11 = 2;
let num12 = 3;
let exp = Math.round(num11, num12); // This will give the round off value of the number in JS
console.log(exp);

// Make a utility with Math library to find random number between 1 to 6
let random = Math.floor(Math.random() * 6) + 1;
console.log(random);

// explain above code
// Math.floor() is used to round off the number to the nearest integer in JS.
// Math.random() is used to generate a random number between 0 to 1 in JS.
// We have multiplied Math.random() by 6 to get a random number between 0 to 6 in JS.
// We have added 1 to Math.random() to get a random number between 1 to 6 in JS.

// 2. Date Library - It is used to work with dates and times in JS.
let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month);

let day = date.getDay();
console.log(day);

let hours = date.getHours();
console.log(hours);

let minutes = date.getMinutes();
console.log(minutes);

let seconds = date.getSeconds();
console.log(seconds);

let milliseconds = date.getMilliseconds();
console.log(milliseconds);

let time = date.getTime();
console.log(time);

let date1 = new Date("2021-10-10");
console.log(date1);

let date2 = new Date("2021-10-10T10:10:10");
console.log(date2);

let date3 = new Date("2021-10-10T10:10:10Z");
console.log(date3);

// 3. RegExp Library - It is used to work with regular expressions in JS.
let reg = /sagar/;
console.log(reg);

let str = "Sagar";
let match = str.match(reg);
console.log(match);

let replace = str.replace(reg, "Sagar");
console.log(replace);

let search = str.search(reg);
console.log(search);
