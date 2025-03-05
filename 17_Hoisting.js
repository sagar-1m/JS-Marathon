// Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
// Hoisting is a JavaScript default behavior.
// Hoisting applies to variable declarations and function declarations.
// Hoisting does not apply to variable initializations.

// Example:

console.log("Age is", age);

var age = 25;

console.log("Age is", age);

test();

function test() {
  console.log("Hello World");
}

// let and const variables are also hoisted but they are not initialized and cannot be accessed before the declaration due to the Temporal Dead Zone (TDZ).

// Example:

console.log("Name is", name);

let name = "John";

console.log("Name is", name);

// The output of the above code will be:
// ReferenceError: Cannot access 'name' before initialization
// In the above code, we have declared a variable name using the let keyword.
// We have tried to access the variable name before its declaration.
// We have tried to access the variable name after its declaration.
// The code throws a ReferenceError because the variable name is not accessible before its declaration due to the Temporal Dead Zone (TDZ).
// The Temporal Dead Zone (TDZ) is the time between the variable creation and initialization.
// The Temporal Dead Zone (TDZ) is a period where the variable is not accessible.
// The Temporal Dead Zone (TDZ) is a JavaScript mechanism that prevents the use of variables before their declaration.
