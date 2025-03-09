// In JS, Throttling is a technique used to ensure that a function is not executed more than once in a given time frame
// In simple words, it limits the rate at which a function is executed and ensures that the function is executed at a regular interval of time

// Use cases
// 1. Scrolling events
// 2. Mouse move events
// 3. Resize events

// You can implement throttling using the setTimeout() function

// Throttling function
function throttle(func, delay) {
  let timerFlag = null; // Timer flag to store the setTimeout function
  return function () {
    const context = this; // Store the context of the function
    const args = arguments; // Store the arguments of the function
    if (timerFlag === null) {
      func(args); // Execute the function if the timer flag is null
      timerFlag = setTimeout(() => {
        timerFlag = null; // Reset the timer flag after the specified delay
      }, delay);
    }
  };
}

// Function to be throttled
function scroll() {
  console.log("Scrolling...");
}

// Create a throttled version of the scroll function
const throttleScroll = throttle(scroll, 3000);

// Call the throttled function
throttleScroll();
throttleScroll();
throttleScroll();
throttleScroll();
// Only the first function will be executed as the timer flag is set to null after the specified delay
// The function will be executed again after the specified delay has passed
// This ensures that the function is not executed more than once in the given time frame

// How Throttling works in JS?
// In JS, the throttling function works when the event is being triggered
// When the event is triggered, the throttling function is called with the specified delay
// The function is executed if the timer flag is null (i.e., the function has not been executed in the given time frame)
// The setTimeout function is set to reset the timer flag after the specified delay
// If the event is triggered again before the specified delay, the function is not executed as the timer flag is not null
// Once the specified delay has passed, the function can be executed again
// Throttling ensures that the function is executed at a regular interval of time and not more than once in the given time frame

// Note: Debouncing and Throttling are similar techniques used to limit the rate at which a function is executed
// Debouncing ensures that the function is executed after a specific delay without any further calls
// Throttling ensures that the function is executed at a regular interval of time and not more than once in the given time frame
