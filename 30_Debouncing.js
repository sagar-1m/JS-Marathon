function pataNahi(fn, delay) {
  // console.log(arguments);

  let myId;
  console.log(parameters);
  return function (...args) {
    console.log(args);
    // using rest operator to get all the arguments passed to the function
    clearTimeout(myId); // clear the previous setTimeout  if any  to avoid multiple setTimeouts
    myId = setTimeout(() => {
      fn.apply(this, args); // using apply to pass the arguments to the function  fn  as an array
    }, delay * 1000); // needed to store the setTimeout id to clear it later
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
// If we call the function sachMeinNahiPata multiple times, the previous setTimeout will be cleared using clearTimeout.
// So, only the last setTimeout will be executed after the specified delay.
// In the above code, we have created a function pataNahi that takes two parameters fn and delay.
// The pataNahi function returns a function that takes any number of arguments using the rest operator.
// The returned function uses setTimeout to execute the fn function after the specified delay.
// We are using clearTimeout to clear the previous setTimeout if any to avoid multiple setTimeouts.
// The setTimeout id is stored in the myId variable to clear it later.
// In the above code, we have created a function greet that takes a name parameter and logs "Hello" with the name.
// We have created a function sachMeinNahiPata using the pataNahi function that calls the greet function after 2 seconds.
// We are calling the sachMeinNahiPata function multiple times to see the output.
// The greet function will be called only once after 2 seconds because the previous setTimeout will be cleared using clearTimeout.
// So, only the last setTimeout will be executed after the specified delay.
// The output will be:
// Hello Sagar

// this is a very useful pattern to avoid multiple setTimeouts when we want to execute a function after a delay.
// Called Debouncing in JavaScript
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it a more efficient practice.
// It forces a function to wait a certain amount of time before running again.
// It is used to limit the rate at which a function is executed.
