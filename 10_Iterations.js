let salesData = [
  {
    product: "Mobile",
    price: 2000,
  },
  {
    product: "TV",
    price: 500,
  },
  {
    product: "Laptop",
    price: 3000,
  },
  {
    product: "AC",
    price: 1500,
  },
];

let totalSales = 0;
for (let i = 0; i < salesData.length; i++) {
  totalSales += salesData[i].price;
}
console.log(totalSales);
//

// using reduce method
let totalSales1 = salesData.reduce((total, item) => total + item.price, 0);
console.log(totalSales1);
// Expplain this method
// We have used the reduce() method to calculate the total sales.
// The reduce() method takes a callback function as a parameter.
// The callback function takes two parameters total and item.
// The total parameter is used to store the total sales.
// The item parameter is used to store the current item in the salesData array.
// We have used the arrow function syntax to calculate the total sales.
// We have initialized the total parameter with 0.
// The reduce() method returns the total sales.
// We have printed the total sales on the console.

// 2. filter() - It is used to filter elements from an array based on a condition in JS. It returns the filtered array.
let salesData2 = [
  {
    product: "Mobile",
    price: 2000,
  },
  {
    product: "TV",
    price: 500,
  },
  {
    product: "Laptop",
    price: 3000,
  },
  {
    product: "AC",
    price: 1500,
  },
];

let expensiveItems = salesData2.filter((item) => item.price > 1000);
console.log(expensiveItems);
// Explain this method
// We have used the filter() method to filter expensive items.
// The filter() method takes a callback function as a parameter.
// The callback function takes one parameter item.
// We have used the arrow function syntax to filter items based on the price.
// The filter() method returns the filtered array.
// We have stored the filtered array in a variable expensiveItems.
// We have printed the expensive items on the console.

// task 2
let userActivity = [
  { user: "Sagar", activityCount: "34" },
  { user: "Raj", activityCount: "45" },
  { user: "Rahul", activityCount: "23" },
];

let totalActivity = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(totalActivity);

// maxUser is taking the first object in the array and comparing it with the next object in the array. as if we didn't provide the initial value in reduce method then it will take the first object in the array as the initial value.
// If the activityCount of the next object is greater than the activityCount of the first object then it will return the next object otherwise it will return the first object.
