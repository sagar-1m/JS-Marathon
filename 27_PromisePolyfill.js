// Promsie Polyfill

// Promise is a built-in object in JavaScript that represents the result of an asynchronous operation. It is used to handle asynchronous operations such as data fetching, file reading, etc. A Promise object can be in one of the three states: pending, fulfilled, or rejected.

// Explain the Signature of Promise in hindi language
// new Promise(executor)
// executor: A function that takes two arguments resolve and reject. The executor function is called immediately when a new Promise object is created. The resolve and reject functions are used to resolve or reject the promise.

// resolve: A function that is called when the asynchronous operation is successful. It changes the promise state to fulfilled.
// reject: A function that is called when the asynchronous operation fails. It changes the promise state to rejected.

// Return value: A Promise object.

// Promise Polyfill

class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._sucessCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];
    this._value = undefined;

    executorFn(
      this.resolverFunction.bind(this),
      this.rejecterFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state === "fulfilled") {
      cb(this._value);
      return this;
    }
    this._sucessCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state === "rejected") {
      cb();
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    if (this._state !== "pending") {
      cb();
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(value) {
    this._value = value;
    this._state = "fulfilled";
    this._sucessCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  rejecterFunction(err) {
    this._state = "rejected";
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve is called");
    }, seconds * 1000);
  });
  return p;
}

wait(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally is called"));

// In the above example, we have created a Promise polyfill named MyPromise. It has the same methods as the built-in Promise object: then, catch, and finally. We have also added the resolverFunction and rejecterFunction to handle the resolve and reject cases.

// Explain each and every line of the above code snippet , how it is working

// 1. We have created a class MyPromise that represents a Promise object. It has the following properties:
// _state: A string that represents the state of the promise (pending, fulfilled, or rejected).
// _sucessCallbacks: An array to store the success callback functions.
// _errorCallbacks: An array to store the error callback functions.
// _finallyCallbacks: An array to store the finally callback functions.
// _value: A variable to store the resolved value of the promise.

// 2. The constructor function takes an executor function as an argument. The executor function takes two arguments: resolve and reject. The executor function is called immediately when a new MyPromise object is created.

// 3. The then method is used to add a success callback function to the promise. If the promise is already fulfilled, the success callback is called immediately.

// 4. The catch method is used to add an error callback function to the promise. If the promise is already rejected, the error callback is called immediately.

// 5. The finally method is used to add a finally callback function to the promise. The finally callback is called when the promise is either fulfilled or rejected.

// 6. The resolverFunction is called when the asynchronous operation is successful. It changes the state of the promise to fulfilled and calls the success callback functions.

// 7. The rejecterFunction is called when the asynchronous operation fails. It changes the state of the promise to rejected and calls the error callback functions.

// 8. We have created a wait function that returns a new MyPromise object. The executor function of the MyPromise object resolves after the specified number of seconds.

// 9. We have called the wait function with a delay of 2 seconds. We have added success, error, and finally callback functions using the then, catch, and finally methods.

// 10. When the promise is resolved, the success callback is called, and the message "resolve is called" is printed to the console.

// 11. When the promise is resolved, the finally callback is called, and the message "finally is called" is printed to the console.

// 12. The output of the above code snippet is:
// resolve is called
// finally is called

// This is how the Promise polyfill works. It allows you to handle asynchronous operations using the Promise API in JavaScript. You can create your own Promise objects and use them to handle asynchronous tasks in your applications.
