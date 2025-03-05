// Call() Method
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

// Syntax:
// methodName.call(objectName, arg1, arg2, ...)

// Example:
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log("Call Output:", person.fullName.call(person1, "New York", "USA"));
console.log("Call Output:", person.fullName.call(person2, "London", "UK"));

// Explaination:
// In the above code, we have created an object person with a method fullName.
// We have created an object person1 with properties firstName and lastName.
// We have created an object person2 with properties firstName and lastName.

// We have called the fullName() method of the person object with the person1 object as the owner object and passed "New York" and "USA" as arguments.
// We have called the fullName() method of the person object with the person2 object as the owner object and passed "London" and "UK" as arguments.

// The output of the above code will be:
// Call Output: John Doe, New York, USA
// Call Output: Jane Doe, London, UK

// In the above code, we have used the call() method to call the fullName() method of the person object with the person1 and person2 objects as the owner objects. We have passed "New York" and "USA" as arguments to the first call and "London" and "UK" as arguments to the second call. The call() method allows us to call a method with an owner object and arguments.

// Apply() Method
// The apply() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter). The difference is that apply() takes an array as an argument, while call() takes an argument list.

// Syntax:
// methodName.apply(objectName, [arg1, arg2, ...])

// Example:
const person3 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person4 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(
  "Apply Output:",
  person3.fullName.apply(person4, ["New York", "USA"])
);

// Explaination:
// In the above code, we have created an object person3 with a method fullName.
// We have created an object person4 with properties firstName and lastName.

// We have called the fullName() method of the person3 object with the person4 object as the owner object and passed an array ["New York", "USA"] as arguments.

// The output of the above code will be:
// Apply Output: John Doe, New York, USA

// In the above code, we have used the apply() method to call the fullName() method of the person3 object with the person4 object as the owner object. We have passed an array ["New York", "USA"] as arguments to the apply() method. The apply() method allows us to call a method with an owner object and arguments as an array.

// Bind() Method
// The bind() method is a predefined JavaScript method.
// It can be used to create a new function from an existing function with a specified owner object.

// Syntax:
// newFunction = methodName.bind(objectName)

// Example:
const person5 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person6 = {
  firstName: "John",
  lastName: "Doe",
};

const person7 = {
  firstName: "Jane",
  lastName: "Doe",
};

const person8 = person5.fullName.bind(person6, "New York", "USA");
const person9 = person5.fullName.bind(person7, "London", "UK");

console.log("Bind Output:", person8());
console.log("Bind Output:", person9());

// Explaination:
// In the above code, we have created an object person5 with a method fullName.
// We have created an object person6 with properties firstName and lastName.
// We have created an object person7 with properties firstName and lastName.

// We have created a new function person8 by binding the fullName() method of the person5 object with the person6 object as the owner object and passed "New York" and "USA" as arguments.
// We have created a new function person9 by binding the fullName() method of the person5 object with the person7 object as the owner object and passed "London" and "UK" as arguments.

// We have called the person8() function to get the full name of person6 with city "New York" and country "USA".
// We have called the person9() function to get the full name of person7 with city "London" and country "UK".

// The output of the above code will be:
// Bind Output: John Doe, New York, USA
// Bind Output: Jane Doe, London, UK

// In the above code, we have used the bind() method to create new functions person8 and person9 by binding the fullName() method of the person5 object with the person6 and person7 objects as the owner objects. We have passed "New York" and "USA" as arguments to the person8 function and "London" and "UK" as arguments to the person9 function. The bind() method allows us to create a new function from an existing function with a specified owner object and arguments.
