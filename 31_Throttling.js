// Throttling in JS

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

// In Simple terms, Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."

// Throttling is used to ensure that the function is not executed more than once in a given time interval.

// Throttling is used to limit the rate at which a function is executed.

// Example

// Let's say we have a button that can be clicked multiple times. We want to execute a function when the button is clicked, but we want to limit the rate at which the function is executed

// We can use throttling to ensure that the function is not executed more than once in a given time interval.

// Let's see an example of throttling in JavaScript:

function pataNahi(fn, delay) {
  // console.log(arguments);
  console.log("parameters", arguments);

  let myId;
  return function (...args) {
    console.log("args", args);
    // using rest operator to get all the arguments passed to the function
    if (!myId) {
      myId = setTimeout(() => {
        fn.apply(this, args); // using apply to pass the arguments to the function  fn  as an array
        myId = null;
      }, delay * 1000); // needed to store the setTimeout id to clear it later
    }
  };
}

function greet(name) {
  console.log("Hello " + name);
}

const sachMeinNahiPata = pataNahi(() => greet("Sagar"), 2);

sachMeinNahiPata();
sachMeinNahiPata();
sachMeinNahiPata();
sachMeinNahiPata();

// What would happen if we call the function sachMeinNahiPata multiple times?
// The function pataNahi returns a function that will be called after the specified delay.
// If we call the function sachMeinNahiPata multiple times, the function will be executed only once in the given time interval.
// In the above code, we have created a function pataNahi that takes two parameters fn and delay.
// The pataNahi function returns a function that takes any number of arguments using the rest operator.
// The returned function uses setTimeout to execute the fn function after the specified delay.
// We are using a flag myId to check if the function is already executed or not.
// If the function is not executed, then only the setTimeout will be called.
// The setTimeout id is stored in the myId variable to clear it later.
// The output will be:
// Hello Sagar
// The greet function will be called only once in the given time interval because of throttling.
// This is how throttling works in JavaScript.
