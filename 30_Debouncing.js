// In JS, Debouncing is a technique used to ensure that a function does not fire until after a certain amount of time has passed since it was last invoked
// In simple words, when you scroll down a page, the scroll event fires multiple times and it can be very expensive to run the function that updates the DOM every time the event is fired.
// Debouncing is a technique to limit the rate at which a function is called.

// Use cases
// 1. Search bar suggestions
// 2. Auto-saving the content of a text editor
// 3. Resizing the window

// It is used to limit the number of times a function is executed
// After a specific delay only, the function is executed, ensuring that the function is not executed repeatedly

// Debouncing is implemented using setTimeout() function
// When the function is called, it sets a timeout and clears the timeout if the function is called again
// This way, the function is only executed after the specified delay

// Debouncing function
function debounce(func, delay) {
  let timeout; // Timeout variable to store the setTimeout function
  return function () {
    const context = this; // Store the context of the function
    const args = arguments; // Store the arguments of the function debounce
    clearTimeout(timeout); // Clear the timeout if the function is called again
    timeout = setTimeout(() => func.apply(context, args), delay); // Set a timeout to execute the function after the specified delay
  };
}

// function to be debounced
function search() {
  console.log("Searching...");
}

// Create a debounced version of search function
const debounceSearch = debounce(search, 3000);

// Call the debounced function
debounceSearch();
debounceSearch();
debounceSearch();
debounceSearch(); // Only this function will be executed after 3 seconds as the previous calls are cleared by the setTimeout function

// How Debouncing works in JS?
// In JS, the debouncing function works when the event is being triggered
// When the event is triggered, the debouncing function is called
// The setTimeout function is set to execute the function after the specified delay
// If the event is triggered again, the clearTimeout function is called to clear the previous timeout and set a new timeout
// Once the specified delay has passed without any further event tiggers, the function is executed
