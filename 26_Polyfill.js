// Polyfill in JS
// Polyfill is a piece of code that provides the technology that you, the developer, expect the browser to provide natively.
// Most of the time, polyfills are used to implement newer standards on older browsers that do not support it.
// For example, if you want to use the Array.prototype.includes() method in an older browser that does not support it, you can use a polyfill to provide the functionality.

// How can we Know that a particular method is supported by the browser or not?

// Using prototype of the method or Class
// Example,  you have an array and browser attached a prototype to it, you can check if the method is available or not
// Array.prototype==array.__proto__  // true

// Example of Polyfill

if (!Array.prototype.hululu) {
  Array.prototype.hululu = function () {
    console.log("Hululu");
  };
}

let arr = [1, 2, 3];
arr.hululu(); // Hululu

// In the above example, we have added a new method hululu to the Array prototype. If the method is not available, we have added it to the prototype.
// Now, you can use this method on any array.

// To make a polyfill, first you need to know signature of original method like what it takes as argument and what it returns.
// Then you can write your own implementation of the method.

// Example of Polyfill for Array.prototype.forEach()

// Explain the Signature of forEach method in hindi language
// array.forEach(callback(currentValue, index, array), thisArg)
// callback: Ek function jo naye array ka ek element produce karta hai, teen arguments leta hai:
// currentValue: Current element jo array me process ho raha hai.
// index (Optional): Current element ka index jo array me process ho raha hai.
// array (Optional): Array jispar forEach call kiya gaya tha, means the array itself.
// thisArg (Optional): Value jo use hota hai as this jab
// callback ko execute kiya jata hai, means the value of this when executing the callback.
// Return value: Yeh koi value nahi return karta hai.

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      // this refers to the array itself
      callback(this[i], i); // this[i] is the current element and i is the index
    }
  };
}

const array1 = [1, 2, 3, 4, 5];

array1.myForEach((value, index) => {
  // value is the current element and index is the index of the current element
  console.log(`At index ${index} the value is ${value}`);
});
// At index 0 the value is 1
// At index 1 the value is 2
// At index 2 the value is 3
// At index 3 the value is 4
// At index 4 the value is 5

// In the above example, we have created a polyfill for the forEach method. We have added a new method myForEach to the Array prototype.
// Now, you can use this method on any array.

// Polyfill for Array.prototype.map()

// Explain the Signature of map method in hindi language
// array.map(callback(currentValue, index, array), thisArg)
// callback: Ek function jo naye array ka ek element produce karta hai, teen arguments leta hai:
// currentValue: Current element jo array me process ho raha hai.
// index (Optional): Current element ka index jo array me process ho raha hai.
// array (Optional): Array jispar map call kiya gaya tha, means the array itself.
// thisArg (Optional): Value jo use hota hai as this jab
// callback ko execute kiya jata hai, means the value of this when executing the callback.
// Return value: A new array with the elements after applying some operation on each element.

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      // this refers to the array itself
      result.push(callback(this[i], i)); // this[i] is the current element and i is the index
    }
  };
}

const array2 = [1, 4, 9, 16, 25];

const mapResult = array2.myMap((value, index) => {
  // value is the current element and index is the index of the current element
  return value * 2;
});

console.log(mapResult); // [2, 8, 18, 32, 50]

// In the above example, we have created a polyfill for the map method. We have added a new method myMap to the Array prototype.
// Now, you can use this method on any array.

// Polyfill for Array.prototype.filter()

// Explain the Signature of filter method in hindi language
// array.filter(callback(element, index, array), thisArg)
// callback: Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise.
// element: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array filter was called upon, means the array itself.
// thisArg (Optional): Value to use as this when executing callback, means the value of this when executing the callback.
// Return value: A new array with the elements that pass the test.

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      // this refers to the array itself
      if (callback(this[i], i)) {
        result.push(this[i]); // this[i] is the current element
      }
    }

    return result;
  };
}

const array3 = [1, 2, 3, 4, 5];

const filterResult = array3.myFilter((value, index) => {
  // value is the current element and index is the index of the current element
  return value % 2 === 0;
});

console.log(filterResult); // [2, 4]

// In the above example, we have created a polyfill for the filter method. We have added a new method myFilter to the Array prototype.
// Now, you can use this method on any array.

// Polyfill for Array.prototype.reduce()

// Signature of reduce method
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// callback: Function to execute on each element. It accepts four arguments:
// accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array reduce() was called upon, means the array itself.
// initialValue (Optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used.
// Return value: The value that results from the reduction.

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue = undefined) {
    if (!initialValue) {
      let accumulator = this[0]; // first element of the array
      for (let i = 1; i < this.length; i++) {
        // this refers to the array itself
        accumulator = callback(accumulator, this[i], i); // accumulator is the accumulated value
      }

      return accumulator;
    } else {
      let accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
        // this refers to the array itself
        accumulator = callback(accumulator, this[i], i); // accumulator is the accumulated value
      }

      return accumulator;
    }
  };
}

const array4 = [1, 2, 3, 4, 5];

const reduceResult = array4.myReduce((accumulator, currentValue) => {
  // accumulator is the accumulated value and currentValue is the current element
  return accumulator + currentValue;
}, 10);

console.log(reduceResult); // 25

// In the above example, we have created a polyfill for the reduce method. We have added a new method myReduce to the Array prototype.
// Now, you can use this method on any array.

// Now refactor the above code for reduce polyfill as there is a lot of code repetition in the polyfill methods.

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue = undefined) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let i = initialValue === undefined ? 1 : 0;

    for (; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

const array5 = [1, 2, 3, 4, 5];

const reduceResult1 = array5.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);

console.log(reduceResult1); // 25

const reduceResult2 = array5.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(reduceResult2); // 15

// In the above example, we have refactored the polyfill for the reduce method. We have added a new method myReduce to the Array prototype.
