// Lexical Scoping

// Lexical scoping means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. Lexical scoping is the reason why inner functions can access the variables of their parent functions.

// Example 1: Lexical Scoping
// In the following example, the inner function `inner` has access to the variable `x` defined in the outer function `outer`. This is an example of lexical scoping.

function outer() {
  const x = 10;
  function inner() {
    console.log(x); // Access the variable `x` from the outer function
  }
  inner(); // Call the inner function
}

outer(); // Output: 10
// In this example, the inner function `inner` has access to the variable `x` defined in the outer function `outer`. This is an example of lexical scoping.

// Example 2: Lexical Scoping
// Now we will make a increment function that will increment the value of count by 1 and return the updated value.

let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3

// In this example, the function `increment` has access to the variable `count` defined outside the function. This is an example of lexical scoping.

// but it has a problem, the count variable is accessible from outside the function and can be modified directly. This can lead to unexpected behavior in the code. To prevent this, we can use closures to create private variables.

// Example 3: Using Closures to Create Private Variables
// In the following example, we use closures to create a private variable `count` that is accessible only through the `increment` function.

function createCounter() {
  let count = 0; // Private variable
  return function increment() {
    count++;
    return count;
  };
}

const increment = createCounter();
const increment2 = createCounter();

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3
console.log(increment2()); // Output: 1
console.log(increment2()); // Output: 2
console.log(increment2()); // Output: 3

// In this example, the `createCounter` function returns an inner function `increment` that has access to the private variable `count`. The `count` variable is not accessible from outside the `createCounter` function, making it a private variable.

// The `increment` function can be called multiple times to increment the `count` variable. Each time the `increment` function is called, the `count` variable is incremented by 1.

// This is an example of using closures to create private variables in JavaScript.
