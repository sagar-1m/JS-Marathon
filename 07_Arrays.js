// ARRAYS in JS are the collection of elements of the same data type

// There are mainly 3 ways to create an array in JS:

// 1. Using Array Literals
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// 2. Using Array Constructor
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// 3. Using Array.from() Method
let arr3 = Array.from([1, 2, 3, 4, 5]);
console.log(arr3);

// There are mainly 3 types of Array Operations in JS:

// 1. Array Length - It is used to find the length of an array in JS.
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.length);

// 2. Array Methods - There are many methods that can be performed on arrays in JS.
// 1. push() - It is used to add an element at the end of an array in JS. It returns the new length of the array.
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.push(6));
console.log(arr5);

// 2. pop() - It is used to remove an element from the end of an array in JS. It returns the removed element.
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.pop());
console.log(arr6);

// 3. unshift() - It is used to add an element at the beginning of an array in JS. It returns the new length of the array.
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.unshift(0));
console.log(arr7);

// 4. shift() - It is used to remove an element from the beginning of an array in JS. It returns the removed element.
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8.shift());
console.log(arr8);

// 5. indexOf() - It is used to find the index of a specific element in an array in JS. if the element is not present in the array then it will return -1.
let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.indexOf(8));
console.log(arr9.indexOf(3));

// 6. lastIndexOf() - It is used to find the last index of a specific element in an array in JS. if the element is not present in the array then it will return -1.
let arr10 = [1, 2, 3, 4, 5, 3];
console.log(arr10.lastIndexOf(3));

// 7. includes() - It is used to check if an element is present in an array in JS. It returns true or false.
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.includes(3));

// 8. slice() - It is used to extract a part of an array in JS. It returns the extracted part of the array.
let arr12 = [1, 2, 3, 4, 5];
console.log(arr12.slice(1, 4));

// 9. splice() - It is used to add or remove elements from an array in JS. It returns the removed elements.
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 1);
console.log(arr13);

// 10. concat() - It is used to concatenate two or more arrays in JS. It returns the concatenated array.
let arr14 = [1, 2, 3, 4, 5];
let arr15 = [6, 7, 8, 9, 10];
console.log(arr14.concat(arr15));

// 11. reverse() - It is used to reverse an array in JS. It returns the reversed array.
let arr16 = [1, 2, 3, 4, 5];
console.log(arr16.reverse());

// MERGING TWO ARRAYS
let arr17 = [1, 2, 3, 4, 5];
let arr18 = [6, 7, 8, 9, 10];
let arr19 = arr17.concat(arr18);
console.log(arr19);

let chaiTypes = ["Masala", "Green", "Black", "Herbal"];
let coffeeTypes = ["Espresso", "Latte", "Cappuccino", "Americano"];
let beverages = chaiTypes.concat(coffeeTypes);
console.log(beverages);

let allBeverages = [...chaiTypes, ...coffeeTypes];
console.log(allBeverages);

// Loops on Arrays
let arr20 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr20.length; i++) {
  console.log(arr20[i]);
}

let arr21 = [1, 2, 3, 4, 5];
arr21.forEach(function (element) {
  console.log(element);
});

let arr22 = [1, 2, 3, 4, 5];
for (let element of arr22) {
  console.log(element);
}

let arr23 = [1, 2, 3, 4, 5];
arr23.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});
