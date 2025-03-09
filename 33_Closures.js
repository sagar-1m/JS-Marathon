// Closures

// A closure is a function that has access to its outer function's scope even after the outer function has returned. This means a closure can remember and access variables and functions of its outer function even after the function has finished.

// In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, simply define a function inside another function and expose it.

// In Simple words, a closure is a function that has access to its outer function's scope even after the outer function has returned means bined with its lexical environment (the variables, functions, etc. in the outer scope) in which the function was declared.

// Example 1:

function outer() {
  const outerVar = "I am from the outer function";
  function inner() {
    console.log(outerVar); // Access the outer variable
  }
  return inner;
}

const innerFn = outer();
innerFn(); // Output: I am from the outer function

// In this example, the inner function `inner` has access to the variable `outerVar` defined in the outer function `outer`. This is an example of a closure.
