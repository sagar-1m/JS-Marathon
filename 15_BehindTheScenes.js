// How JS works when we run a script in node.js?

// Answer:
// When we run a script in node.js, the node.js runtime reads the script line by line and executes it.
// This node.js runtime is built on the V8 engine which is the same engine that powers Google Chrome.
// This runtime is nothing , it is Call Stack which is a data structure that stores information about the active subroutines of a computer program.
// The node.js runtime uses the Call Stack to keep track of the execution of the script.
// When a function is called, it is added to the Call Stack and when the function returns, it is removed from the Call Stack.

// The Call Stack is a Last In First Out (LIFO) data structure.
// The Call Stack is used to keep track of the execution of the script.
// The Call Stack takes the script execution in a synchronous way.
// The Call Stack is a single-threaded mechanism.
// If there is a seTimeout() function in the script, it moves the fucntion to browser window API.

// The Browser Window API is a set of functions provided by the browser that allows us to interact with the browser window.
// It is used to perform operations like setTimeout(), setInterval(), fetch(), etc.
// The Browser Window API is a non-blocking mechanism.
// The Browser Window API is used to perform asynchronous operations.
// When the setTimeout() function is called, it moves the function to the Browser Window API and sets a timer.
// When the timer expires, the function is moved to the Callback Queue.

// The Callback Queue is a data structure that stores the functions that are ready to be executed.
// The Callback Queue is a First In First Out (FIFO) data structure.
// The Callback Queue is then moved to the Event Loop.

// The Event Loop is a mechanism that checks the Call Stack and the Callback Queue.
// The Event Loop checks if the Call Stack is empty and if the Call Stack is empty, it moves the function from the Callback Queue to the Call Stack.
// The Event Loop is used to perform asynchronous operations.
// The Event Loop is a single-threaded mechanism.
// The Event Loop is used to handle the execution of the script.

// Example

console.log("Hello World");

setTimeout(() => {
  console.log("Hello World from setTimeout");
}, 0);

console.log("Hello World again");

// Explaination:
// In the above code, we have printed "Hello World" on the console.
// We have used the setTimeout() function to print "Hello World from setTimeout" after 0 milliseconds.
// We have printed "Hello World again" on the console.
// The output of the above code will be:
// Hello World
// Hello World again
// Hello World from setTimeout
// In the above code, the setTimeout() function is moved to the Browser Window API and sets a timer.
// When the timer expires, the function is moved to the Callback Queue.
// The Event Loop checks if the Call Stack is empty and if the Call Stack is empty, it moves the function from the Callback Queue to the Call Stack.
// The function is then executed and prints "Hello World from setTimeout" on the console.

obj = {
  name: "Sagar",
  greet: function () {
    console.log(`Hello World from ${this.name}`);
  },
};

setTimeout(obj.greet.bind(obj), 1000);

// Explaination:
// In the above code, we have created an object obj with a property name and a method greet.
// We have used the bind() method to bind the greet() method to the obj object.
// We have used the setTimeout() function to call the greet() method after 1000 milliseconds.
// The output of the above code will be:
// Hello World from Sagar

// This bind method keeps the reference of this keyword to the object which is calling the function.
// In the above code, this refers to the obj object.
// The bind() method is used to create a new function from an existing function with a specified owner object.
