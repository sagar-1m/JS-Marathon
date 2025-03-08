function pataNahi(fn, delay) {
  // want to print pataNahi function parameters in console using arguments object
  console.log(arguments);
}

pataNahi("Sagar", 1000);
// Output:
// [Arguments] { '0': 'Sagar', '1': 1000 }

// In the above code, we have created a function pataNahi that takes two parameters fn and delay.
// We want to print the pataNahi function parameters in the console using the arguments object.
// The arguments object is an array-like object that contains all the arguments passed to a function.
// In the above code, we have passed two arguments "Sagar" and 1000 to the pataNahi function.
// When we print the arguments object, it will print an array-like object with two properties 0 and 1.
// The 0 property contains the first argument "Sagar" and the 1 property contains the second argument 1000.
// The arguments object is useful when we want to access all the arguments passed to a function without knowing the number of arguments in advance.
// In simple terms, the arguments object provides values of all the arguments passed to a function in an array-like object.
// The arguments object is not an array, but it behaves like an array and has a length property that tells the number of arguments passed to a function.
