// Suppose if .then() also make callback hell means if we have multiple .then() then it will be difficult to manage the code. So, to avoid this we can use async await.

// Async Await
// Async/await is a new way to write asynchronous code in JavaScript. It is built on top of promises and provides a simpler way to work with asynchronous code. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to be resolved. The async/await syntax makes asynchronous code look and behave more like synchronous code.

// The async/await syntax is a cleaner and more readable way to write asynchronous code compared to using promises and callbacks. It makes the code easier to understand and maintain  means it is a Syntactic sugar over promises.

// The async/await syntax is supported in Node.js version 7.6.0 and later. It is recommended to use async/await for writing asynchronous code in Node.js applications.

// Let's see how we can rewrite the above code using async/await:
//Task:
// 1. Read content of hello.txt file using fs.readFile() method.
// 2. Create a new file named backup.txt using fs.writeFile() method.
// 3. Write the content of hello.txt to backup.txt file.
// 4. Delete hello.txt file using fs.unlink() method.

const fs = require("fs");

console.log("Start");

// 1. function to read file content with promise - readFileWithPromise()
function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
}

// 2. function to write file content with promise - writeFileWithPromise()
function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// 3. function to delete file with promise - deleteFileWithPromise()
function deleteFileWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// 4. read file content using promise with async/await
async function fileOperations() {
  try {
    const content = await readFileWithPromise("hello.txt", "utf-8");
    console.log("File reading successful", content);
    await writeFileWithPromise("backup.txt", content);
    console.log("File writing successful");
    await deleteFileWithPromise("hello.txt");
    console.log("File deletion successful");
  } catch (err) {
    console.error(err);
  } finally {
    console.log("All operations completed");
  }
}

fileOperations();

console.log("End");

// Here we have used async/await to read the content of the hello.txt file, write the content to the backup.txt file, and delete the hello.txt file. The fileOperations() function is an asynchronous function that uses the await keyword to wait for the promises returned by the readFileWithPromise(), writeFileWithPromise(), and deleteFileWithPromise() functions to be resolved.

// In the fileOperations() function, we use try/catch blocks to handle errors that may occur during the asynchronous operations. The finally block is used to log a message after all the operations are completed, regardless of whether they were successful or not.

// Async keyword is mandatory to use await keyword. If we use await keyword without async keyword then it will throw an error.

// Await keyword is used to wait for the promise to be resolved. It can only be used inside an async function. If we use await keyword outside an async function then it will throw an error.
