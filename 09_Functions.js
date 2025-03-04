// FUNCTIONS in JS means a block of code that can be called by name in JS and is used to perform a specific task in JS.

// There are mainly 3 types of Functions in JS:
// 1. Function Declaration - It is used to create a function in JS.
function greet() {
  console.log("Hello World");
}
greet();

// 2. Function Expression - It is used to store a function in a variable in JS.
let greet1 = function () {
  console.log("Hello World");
};
greet1();

// 3. Arrow Function - It is used to create a function in JS.
let greet2 = () => {
  console.log("Hello World");
};
greet2();

// There are mainly 3 types of Function Operations in JS:

// 1. Function Parameters - It is used to pass values to a function in JS.
function greet3(name) {
  console.log(`Hello ${name}`);
} // Here name is a parameter
greet3("Sagar"); // Here Sagar is an argument passed to the function

// 2. Function Return - It is used to return a value from a function in JS.
function greet4() {
  return "Hello World";
}
let greeting = greet4();
console.log(greeting);

// task 1
// Ek shopping store hai agar customer 500 se jyada shopping karta hai to use 20% discount milta hai nahi toh same price pay karna padta hai.

function shoppingBill(amount) {
  if (amount > 500) {
    return amount * 0.8;
  }
  return amount;
}

let bill = shoppingBill(600);
console.log(bill);

// explain calculation
// We have created a function shoppingBill() that takes an amount as a parameter.
// We have used if-else condition to check if the amount is greater than 500 or not.
// If the amount is greater than 500 then we have returned the amount after applying a 20% discount.
// If the amount is less than 500 then we have returned the same amount.
// We have called the shoppingBill() function with an amount of 600 and stored the result in a variable bill.
// We have printed the bill amount on the console.

// explain call stack for above code
// 1. shoppingBill(600) is called.
// 2. The amount is passed as a parameter to the shoppingBill() function.
// 3. The if-else condition is checked.
// 4. The amount is greater than 500 so the discount is applied.
// 5. The result is returned.
// 6. The result is stored in the variable bill.
// 7. The bill amount is printed on the console.

// task 2
// Ek traffic light system hai, agar light red hai toh stop, agar yellow hai toh slow down aur agar green hai toh chalo.

function trafficLight(color) {
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}

let action = trafficLight("red");
console.log(action);

// task 3
//ek function jo check kare ki value truthy hai ya falsy

function checkTruthyFalsy(value) {
  if (value) {
    return "Truthy";
  }
  return "Falsy";
}

console.log(checkTruthyFalsy(0));
console.log(checkTruthyFalsy(""));
console.log(checkTruthyFalsy(null));
console.log(checkTruthyFalsy(undefined));
console.log(checkTruthyFalsy(NaN));
console.log(checkTruthyFalsy(5));
console.log(checkTruthyFalsy("Sagar"));
console.log(checkTruthyFalsy(true));
console.log(checkTruthyFalsy(false));
console.log(checkTruthyFalsy({}));
console.log(checkTruthyFalsy([]));

// explaination of above function and output what is truthy and falsy
// We have created a function checkTruthyFalsy() that takes a value as a parameter.
// We have used if-else condition to check if the value is truthy or falsy.
// If the value is truthy then we have returned "Truthy".
// If the value is falsy then we have returned "Falsy".
// We have called the checkTruthyFalsy() function with different values and printed the result on the console.
// Truthy values are those values that are considered true in JS. Falsy values are those values that are considered false in JS.
// 0, "", null, undefined, NaN, false are falsy values in JS.
// All other values are truthy values in JS.

// task 4
// ek function jismein username admin hona chahiye and password 12345 hona chahiye

function login(username, password) {
  if (username === "admin" && password === "12345") {
    return "Login Successful";
  }
  return "Login Failed";
}

console.log(login("admin", "12345"));
console.log(login("admin", "123456"));
