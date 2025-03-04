// STRING in JS  - It is used to store a sequence of characters in JS.
// There are mainly 3 types of String Operations in JS:

// 1. String Concatenation - It is used to concatenate two or more strings in JS.
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);

// 2. String Length - It is used to find the length of a string in JS.
let str4 = "Hello World";
let strLength = str4.length;
console.log(strLength);

// 3. String Methods - There are many methods that can be performed on strings in JS.
// 1. toUpperCase() - It is used to convert a string to uppercase in JS.
let str5 = "hello world";
let upperCase = str5.toUpperCase();
console.log(upperCase);

// 2. toLowerCase() - It is used to convert a string to lowercase in JS.
let str6 = "HELLO WORLD";
let lowerCase = str6.toLowerCase();
console.log(lowerCase);

// 3. charAt() - It is used to find the character at a specific index in a string in JS.
let str7 = "Hello World";
let char = str7.charAt(6);
console.log(char);

// 4. indexOf() - It is used to find the index of a specific character in a string in JS.
let str8 = "Hello World";
let index = str8.indexOf("o");
console.log(index);

// 5. lastIndexOf() - It is used to find the last index of a specific character in a string in JS.
let str9 = "Hello World";
let lastIndex = str9.lastIndexOf("o");
console.log(lastIndex);

// 6. Slice() - It is used to extract a part of a string in JS.
let str10 = "Hello World";
let slice = str10.slice(6, 11);
console.log(slice);

// 7. Substring() - It is used to extract a part of a string in JS.
let str11 = "Hello World";
let substring = str11.substring(6, 11);
console.log(substring);

// 8. substr() - It is used to extract a part of a string in JS.
let str12 = "Hello World";
let substr = str12.substr(6, 5);
console.log(substr);

// Template Literals - It is used to create a string in JS.
let name = "Sagar";
let age = 23;
let str13 = `My name is ${name} and I am ${age} years old`;
console.log(str13);
