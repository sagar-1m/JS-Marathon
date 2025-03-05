// Promises in JS
// Promises are used to handle asynchronous operations in JavaScript.
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise in simple terms is a placeholder for a value that we don't have yet but will have in the future. like jab tak woh value nahi aati tab tak hum kuch aur kaam kar sakte hain and by giving callback functions we can get the value when it arrives.

// There are mainly 3 states of a Promise:
// 1. Pending: Initial state, neither fulfilled nor rejected. meaning that the operation has not yet completed or failed.
// 2. Fulfilled: Meaning that the operation completed successfully meaning that the operation succeeded.
// 3. Rejected: Meaning that the operation failed meaning that the operation failed.

// There are mainly 2 types of Promises:
// 1. Resolved Promise: The Promise is either fulfilled or rejected.
// 2. Unresolved Promise: The Promise is pending.

// There are mainly 2 ways to create a Promise:
// 1. Using Promise Constructor
// 2. Using async/await

// 1. Using Promise Constructor
// We can create a Promise using the Promise constructor.
// The Promise constructor takes a callback function as an argument.
// The callback function takes two arguments: resolve and reject.
// resolve is a function that is called when the Promise is fulfilled.
// reject is a function that is called when the Promise is rejected.
// The Promise constructor returns a Promise object.
// We can use the then() method to handle the fulfillment of the Promise.
// We can use the catch() method to handle the rejection of the Promise.

// Example:
// Create a Promise that resolves after 2 seconds.
const promise = new Promise((resolve, reject) => {
  // resolve and reject are callback functions that are used to fulfill or reject the Promise.
  setTimeout(() => {
    resolve("Promise is fulfilled");
  }, 2000);
});

promise.then((value) => {
  console.log(value); // Promise is fulfilled
});

// In the above example, we have created a Promise that resolves after 2 seconds.
// We have used the Promise constructor to create a Promise.
// The Promise constructor takes a callback function as an argument.
// The callback function takes two arguments: resolve and reject.
// We have used the setTimeout() function to simulate an asynchronous operation.
// We have called the resolve() function after 2 seconds to fulfill the Promise.
// We have used the then() method to handle the fulfillment of the Promise.
// The then() method takes a callback function as an argument that is called when the Promise is fulfilled.
// The callback function takes the value of the Promise as an argument.
// We have logged the value of the Promise to the console.

// 2. Using async/await
// We can create a Promise using the async/await syntax.
// The async keyword is used to define an asynchronous function.
// The await keyword is used to wait for a Promise to be fulfilled.
// We can use the try/catch block to handle the rejection of the Promise.

// Example:
// Create a Promise that resolves after 2 seconds using async/await.
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is fulfilled using async/await");
  }, 2000);
});

async function getPromise() {
  // async function to handle the Promise
  try {
    const value = await newPromise; // wait for the Promise to be fulfilled
    console.log(value); // Promise is fulfilled using async/await
  } catch (error) {
    console.log(error);
  }
}

getPromise();

// In the above example, we have created a Promise that resolves after 2 seconds using async/await.
// We have used the Promise constructor to create a Promise.
// The Promise constructor takes a callback function as an argument.
// The callback function takes two arguments: resolve and reject.
// We have used the setTimeout() function to simulate an asynchronous operation.
// We have called the resolve() function after 2 seconds to fulfill the Promise.
// We have defined an asynchronous function getPromise() using the async keyword.
// We have used the await keyword to wait for the Promise to be fulfilled.
// We have used the try/catch block to handle the rejection of the Promise.
// We have logged the value of the Promise to the console.

// That's it for Promises in JavaScript.
// Thank You.
