// Synchronous Method
// The synchronous method blocks the execution of the code until the operation is completed, means it waits for the operation to complete before moving to the next line of code.

const fs = require("fs");

console.log("Start");

const contents = fs.readFileSync("hello.txt", "utf-8"); // Synchronous method to read a file
console.log("File reading Successfull", contents);

console.log("End");

// In the above example, we have used the synchronous method fs.readFileSync() to read the contents of a file.
// The fs.readFileSync() method reads the contents of a file synchronously.
// The method takes two arguments: the file path and the encoding means the character encoding of the file.
// The method returns the contents of the file as a string.
// The method blocks the execution of the code until the file is read completely.
// The method throws an error if the file is not found.
// We have logged the contents of the file to the console.
// We have logged the start and end messages to the console.
// The start message is logged first, then the contents of the file are logged, and finally, the end message is logged.

// Note: Synchronous methods block the execution of the code until the operation is completed.
// If the operation takes a long time to complete, the code will be blocked until the operation is completed.
// This can lead to performance issues in the application.
// It is recommended to use asynchronous methods for I/O operations to avoid blocking the execution of the code.
