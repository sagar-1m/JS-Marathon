// First Class Function in JS

// 1. A function can be stored in a variable
// 2. A function can be stored in an array
// 3. A function can be stored in an object
// 4. We can create function as need and return from another function
// 5. We can pass function as an argument to another function

// 1. A function can be stored in a variable

function sayHello() {
  return "Hello World";
}

var hello = sayHello;
console.log(hello); // [Function: sayHello] -> It is a function object

console.log(hello()); // Hello World  -> It will call the function  sayHello

// 2. A function can be stored in an array

var arr = [1, 2, 3, 4, sayHello];
console.log(arr); // [ 1, 2, 3, 4, [Function: sayHello] ]

console.log(arr[4]()); // Hello World

// 3. A function can be stored in an object

var obj = {
  name: "Sohan",
  sayHello: sayHello,
};

console.log(obj); // { name: 'Sohan', sayHello: [Function: sayHello] }

console.log(obj.sayHello()); // Hello World

// 4. We can create function as need and return from another function

function greet() {
  return function () {
    return "Hello World";
  };
}

var myFunc = greet();
console.log(myFunc); // [Function (anonymous)]  -> It is a function object

console.log(myFunc()); // Hello World -> It will call the function inside greet function

// 5. We can pass function as an argument to another function

function greet2(fn) {
  console.log(fn());
}

greet2(sayHello); // Hello World

// 6. We can return a function from another function

function greet3() {
  return function () {
    return "Hello World";
  };
}

var myFunc2 = greet3();
console.log(myFunc2()); // Hello World

// 7. We can store function in an object

var obj2 = {
  name: "Sohan",
  sayHello: function () {
    return "Hello World";
  },
};

console.log(obj2); // { name: 'Sohan', sayHello: [Function: sayHello] }

console.log(obj2.sayHello()); // Hello World
