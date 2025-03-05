// IIFE : Immediately Invoked Function Expression

// IIFE is a function that is executed immediately after it is created.
// It is a design pattern that is also known as a Self-Executing Anonymous Function.
// It is used to avoid polluting the global scope.
// It is used to create a private scope for the function.
// It is used to avoid naming conflicts.
// It is used to create a closure.
// It is used to create a module.

// Syntax:
// (function () {
//   // code here
// })();

// Example:
(function () {
  console.log("Hello World");
})();

// Explaination:
// In the above code, we have created an IIFE that prints "Hello World" on the console.
// We have created an anonymous function inside the parentheses.
// We have called the function immediately after it is created using the parentheses.
// The output of the above code will be: Hello World
