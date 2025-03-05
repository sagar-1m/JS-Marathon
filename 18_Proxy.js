// There is an array in which i want to access the element like arr[-1].
// normally it will give undefined but i want to access the element from the end of the array.
// So i will use Proxy to access the element from the end of the array.

// Proxy in JS is used to intercept the operation on an object and can be used to implement the custom behavior for fundamental operations.
// Proxy means making a copy of something and then using that copy to access the original object.
// Proxy is a constructor that takes two arguments: target and property.
// target: The object to wrap.
// property: An object containing the handler methods.

// In the below example, we are using the Proxy to access the element from the end of the array.

let arr = [1, 2, 3, 4, 5];
arr = new Proxy(arr, {
  // arr is target, {} is property
  get(target, prop) {
    const index = Number(prop);
    if (index < 0) {
      return target[target.length + index];
    }
    return target[index];
  },
  set(target, prop, value) {
    // here prop is index, value is value to be set, target is array
    const index = Number(prop);
    if (index < 0) {
      target[target.length + index] = value;
    } else {
      target[index] = value;
    }
    return true;
  },
});

console.log(arr[-1]); // 5
console.log(arr[-2]); // 4
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr); // [1, 2, 3, 4, 5]
arr[-1] = 10;
console.log(arr); // [1, 2, 3, 4, 10]
arr[-2] = 20;
console.log(arr); // [1, 2, 3, 20, 10]

// In the above example, we have created a Proxy object for the array. We have defined the get and set handler methods to access the element from the end of the array.
// If the index is less than 0, then we are returning the element from the end of the array.
// If the index is greater than or equal to 0, then we are returning the element from the start of the array.
// We have also defined the set handler method to set the element in the array.
// If the index is less than 0, then we are setting the element from the end of the array.
// If the index is greater than or equal to 0, then we are setting the element from the start of the array.
// Finally, we have accessed the element from the end of the array using the Proxy object.

// Also , there is change in original array as well. So, we can use Proxy to change the original array as well.
// So, this is how we can use Proxy to access the element from the end of the array in JavaScript.

// That's it for the Proxy in JavaScript.
// Thank You.
