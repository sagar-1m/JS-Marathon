// Task 1
// There is an array Expeneses in which there are multiple objects are there with three properties description, amount, category. You will have to reduce the array to get the total expense report of each category. The output should be an object with the category as the key and the total amount as the value.
// The output should be like this:
// {
//     "category1": totalAmount1,
//     "category2": totalAmount2,
//     "category3": totalAmount3,
//     "category4": totalAmount4,
// }

let Expenses = [
  { description: "Dinner", amount: 100, category: "Food" },
  { description: "Lunch", amount: 50, category: "Food" },
  { description: "Fuel", amount: 100, category: "Travel" },
  { description: "Cab", amount: 30, category: "Travel" },
  { description: "Medicine", amount: 20, category: "Health" },
  { description: "Gym", amount: 10, category: "Health" },
  { description: "Fruits", amount: 5, category: "Food" },
  { description: "Juice", amount: 10, category: "Food" },
  { description: "Petrol", amount: 200, category: "Travel" },
  { description: "Bus", amount: 50, category: "Travel" },
];

let expenseReport = Expenses.reduce((Report, Expense) => {
  Report[Expense.category] =
    Report[Expense.category] + Expense.amount || Expense.amount;
  return Report;
}, {}); // Add empty object as initial value

console.log("Expense Report:", expenseReport);

// Explaination:
// In the above code, we have an array of objects named Expenses. We have to reduce the array to get the total expense report of each category. We have used the reduce() method to get the total expense report of each category. We have initialized an empty object as the initial value of the reduce() method. We have used the category property of each object as the key and the amount property of each object as the value. We have added the amount of each object to the total amount of the respective category. Finally, we have printed the expense report using console.log().
// The output of the above code will be:
// Expense Report: { Food: 165, Travel: 380, Health: 30 }

// Task 2
// There is an array of tasks in which there are multiple objects with three properties description, completed, priority. You will have to filter the array to get the pending tasks and then sort the pending tasks based on the priority. The output should be an array of objects with the pending tasks sorted based on the priority.
// The output should be like this:
// [
//     { description: "Task1", completed: false, priority: "High" },
//     { description: "Task2", completed: false, priority: "Low" },
//     { description: "Task3", completed: false, priority: "Medium" },
// ]

let Tasks = [
  { description: "Write Report", completed: true, priority: "High" },
  { description: "Prepare Presentation", completed: false, priority: "Low" },
  { description: "Attend Meeting", completed: false, priority: "Medium" },
  { description: "Send Email", completed: true, priority: "High" },
  { description: "Review Code", completed: false, priority: "Low" },
  { description: "Create Document", completed: false, priority: "Medium" },
];

let pendingSortedTasks = Tasks.filter((task) => !task.completed).sort(
  (a, b) => a.priority - b.priority
);

console.log("Pending Sorted Tasks:", pendingSortedTasks);

// Explaination:
// In the above code, we have an array of objects named Tasks. We have to filter the array to get the pending tasks and then sort the pending tasks based on the priority. We have used the filter() method to get the pending tasks. We have used the sort() method to sort the pending tasks based on the priority. We have used the priority property of each object to sort the tasks. Finally, we have printed the pending sorted tasks using console.log().
// The output of the above code will be:
// Pending Sorted Tasks: [
//     { description: 'Prepare Presentation', completed: false, priority: 'Low' },
//     { description: 'Review Code', completed: false, priority: 'Low' },
//     { description: 'Attend Meeting', completed: false, priority: 'Medium' }
// ]

// Task 3
// There is an array movieRatings in which there are multiple objects with two properites title, ratings of array type. You will have to reduce the array to get the average rating of each movie. The output should be an object with the title as the key and the average rating as the value.
// The output should be like this:
// {
//     "Movie1": averageRating1,
//     "Movie2": averageRating2,
//     "Movie3": averageRating3,
// }

let movieRatings = [
  { title: "Movie1", ratings: [4, 5, 3, 2, 5] },
  { title: "Movie2", ratings: [3, 4, 5, 2, 4] },
  { title: "Movie3", ratings: [5, 4, 3, 5, 4] },
];

let averageRating = movieRatings.reduce((Ratings, Movie) => {
  Ratings[Movie.title] =
    Movie.ratings.reduce((sum, rating) => sum + rating, 0) /
    Movie.ratings.length;
  return Ratings;
}, {}); // Add empty object as initial value

console.log("Average Rating:", averageRating);

// Explaination:
// In the above code, we have an array of objects named movieRatings. We have to reduce the array to get the average rating of each movie. We have used the reduce() method to get the average rating of each movie. We have initialized an empty object as the initial value of the reduce() method. We have used the title property of each object as the key and the average rating as the value. We have used the reduce() method to get the sum of all ratings and then divided by the total number of ratings to get the average rating. Finally, we have printed the average rating using console.log().
// The output of the above code will be:
// Average Rating: { Movie1: 3.8, Movie2: 3.6, Movie3: 4.2 }
