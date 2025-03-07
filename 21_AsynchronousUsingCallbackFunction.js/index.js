const fs = require("fs");

console.log("Start");

// Asynchronous function using callback function
fs.readFile("hello.txt", "utf-8", (err, content) => {
  if (err) {
    console.log("An error occurred in reading file content", err);
    return;
  }
  console.log("File reading successful", content);
});

console.log("End");

// In the above example, we have used the asynchronous method fs.readFile() to read the contents of a file.
// The fs.readFile() method reads the contents of a file asynchronously.
// The method takes three arguments: the file path, the encoding, and a callback function.
// The callback function is called when the file is read completely.
// The callback function takes two arguments: an error object and the contents of the file.
// If an error occurs while reading the file, the error object will be passed to the callback function.
// If the file is read successfully, the contents of the file will be passed to the callback function.
// We have logged the contents of the file to the console inside the callback function.
// We have logged the start and end messages to the console.
// The start message is logged first, then the end message is logged, and finally, the contents of the file are logged.
// The code does not block the execution while reading the file.
// The code continues to execute other statements while the file is being read.
// The callback function is called when the file is read completely.
// The asynchronous method does not block the execution of the code.
// The code is executed in a non-blocking manner.

// Note: Asynchronous methods do not block the execution of the code.
// The code continues to execute other statements while the operation is in progress.
// It means this asynchronous method is preferred by earlier programmers to avoid blocking the execution of the code using callback functions.

// Callback functions are passed as arguments to the asynchronous functions.
// And called by the asynchronous functions when the operation is completed.
// Callback functions are used to handle the results of asynchronous operations.
