// Conversion of data types in JS is important as it helps in converting one data type to another data type in JS.
// Conversion is done because we need to know what type of data we are working with in JS.

// 1. Implicit Conversion - It is done by JS automatically and is done when we perform operations on different data types in JS.
let str = "100";
let num = 100;
let sum = num + str; // 100 + "100" = "100100"
console.log(sum);
console.log(typeof sum);

// 2. Explicit Conversion - It is done by the developer and is done when we want to convert one data type to another data type in JS.
let str1 = "100";
let num1 = 100;
let sum1 = Number(str1) + num1; // 100 + 100 = 200
console.log(sum1);
console.log(typeof sum1);

// 3. Type Conversion - It is done by JS automatically and is done when we want to convert one data type to another data type in JS.
let str2 = "100";
let num2 = 100;
let sum2 = str2 + num2; // "100" + 100 = "100100"
console.log(sum2);
console.log(typeof sum2);

// 4. Type Coercion - It is done by JS automatically and is done when we want to convert one data type to another data type in JS.
let str3 = "100";
let num3 = 100;
let sum3 = str3 + num3; // "100" + 100 = "100100"
console.log(sum3);
console.log(typeof sum3);

// 5. parseInt() - It is used to convert a string to an integer in JS.
let str4 = "100";
let num4 = 100;
let sum4 = parseInt(str4) + num4; // 100 + 100 = 200
console.log(sum4);
console.log(typeof sum4);

// 6. parseFloat() - It is used to convert a string to a float in JS.
let str5 = "100.5";
let num5 = 100.5;
let sum5 = parseFloat(str5) + num5;
console.log(sum5);
console.log(typeof sum5);

// 7. Number() - It is used to convert a string to a number in JS.
let str6 = "100";
let num6 = 100;
let sum6 = Number(str6) + num6;
console.log(sum6);
console.log(typeof sum6);

// 8. String() - It is used to convert a number to a string in JS.
let str7 = "100";
let num7 = 100;
let sum7 = str7 + String(num7);
console.log(sum7);
console.log(typeof sum7);

// 9. Boolean() - It is used to convert a value to a boolean in JS.
let str8 = "100";
let num8 = 100;
let sum8 = Boolean(str8) + num8;
console.log(sum8); // 1 + 100 = 101
console.log(typeof sum8);

// 10. toString() - It is used to convert a number to a string in JS.
let str9 = "100";
let num9 = 100;
let sum9 = num9.toString() + str9; // 100 + "100" = "100100"
console.log(sum9);
console.log(typeof sum9);

// 11. toFixed() - It is used to convert a number to a string in JS.
let num10 = 100.5;
let sum10 = num10.toFixed(0); // 100.5 => 100
console.log(sum10);
console.log(typeof sum10);

// 12. toPrecision() - It is used to convert a number to a string in JS.
let num11 = 100.5;
let sum11 = num11.toPrecision(2); // 100.5 => 100
console.log(sum11);
console.log(typeof sum11);

// 13. + operator - It is used to convert a number to a string in JS.
let str12 = "100";
let num12 = 100;
let sum12 = +str12 + num12; // 100 + 100 = 200
console.log(sum12);
console.log(typeof sum12);

// 14. - operator - It is used to convert a number to a string in JS.
let str13 = "100";
let num13 = 100;
let sum13 = -str13 + num13; // -100 + 100 = 0
console.log(sum13);
console.log(typeof sum13);

// 15. !! operator - It is used to convert a number to a string in JS.
let str14 = "100";
let num14 = 100;
let sum14 = !!str14 + num14; // true + 100 = 101
console.log(sum14);
console.log(typeof sum14);

// 16. ~ operator - It is used to convert a number to a string in JS.
let str15 = "100";
let num15 = 100;
let sum15 = ~str15 + num15; // -101
console.log(sum15);
console.log(typeof sum15);
