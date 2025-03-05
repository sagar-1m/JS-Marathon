// this keyword in JavaScript
// this keyword refers to an object, that object which is executing the current bit of JavaScript code.
// In other words, every JavaScript function while executing has a reference to its current execution context, called this.
// In the global context, this refers to the global object.

const person = function greet(name) {
  console.log(this.personName + " says Hello " + name);
};

const person1 = {
  personName: "Sagar",
  greet: person,
};

const person2 = {
  personName: "John",
  greet: person,
};

person1.greet("John");
person2.greet("Sagar");
// Explaination:
// In the above code, we have created a function greet() that takes a name as a parameter.
// We have created an object person1 with a property personName and a method greet.
// We have created an object person2 with a property personName and a method greet.

// We have called the greet() method of person1 object with the name "John".
// We have called the greet() method of person2 object with the name "Sagar".

// The output of the above code will be:
// Sagar says Hello John
// John says Hello Sagar
// In the above code, this refers to the object that is calling the function. In the first case, this refers to the person1 object and in the second case, this refers to the person2 object.
