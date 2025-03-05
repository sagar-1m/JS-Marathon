// Starvation in JS
// Starvation is a condition in which a process is perpetually denied necessary resources.

// In JS, Starvation can occur when a function is added to the Callback Queue but the Call Stack is never empty.

console.log("HI");

setTimeout(function timerfn() {
  console.log("Hello World from setTimeout");
}, 0);

Promise.resolve().then(function p1() {
  console.log("Hello World from Promise1");

  Promise.resolve().then(function p2() {
    console.log("Hello World from Promise2");

    Promise.resolve().then(function p3() {
      console.log("Hello World from Promise3");
    });
  });
});

console.log("BYE");

// Explaination:
// In the above code, we have printed "HI" on the console.
// We have used the setTimeout() function to print "Hello World from setTimeout" after 0 milliseconds.
// We have used the Promise.resolve() function to print "Hello World from Promise1" on the console.
// We have used the Promise.resolve() function to print "Hello World from Promise2" on the console.
// We have used the Promise.resolve() function to print "Hello World from Promise3" on the console.
// We have printed "BYE" on the console.

// The output of the above code will be:
// HI
// BYE
// Hello World from Promise1
// Hello World from Promise2
// Hello World from Promise3
// Hello World from setTimeout

// In the above code, the setTimeout() function is moved to the Browser Window API and sets a timer.
// The Promise.resolve() function is moved to the microtask queue.
// The microtask queue is checked before the Callback Queue.
// The Promise.resolve() function is moved to the Call Stack and executed.
// The setTimeout() function is moved to the Callback Queue.
// The Event Loop checks if the Call Stack is empty and if the Call Stack is empty, it moves the function from the Callback Queue to the Call Stack.
// The function is then executed and prints "Hello World from setTimeout" on the console.
