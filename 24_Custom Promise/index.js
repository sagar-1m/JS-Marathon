// Custom Promise

// Promise is a built-in object in JavaScript that represents the result of an asynchronous operation. It is a way to handle asynchronous operations and provides a way to chain multiple asynchronous operations together. In this article, we will implement a custom Promise object in JavaScript.

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

// 4. read file content using promise
readFileWithPromise("hello.txt", "utf-8")
  .then((content) => {
    console.log("File reading successful", content);
    return writeFileWithPromise("backup.txt", content);
  })
  .then(() => {
    console.log("File writing successful");
    return deleteFileWithPromise("hello.txt");
  })
  .then(() => {
    console.log("File deletion successful");
  })
  .catch((err) => {
    console.log("An error occurred", err);
  });

console.log("End");

// So, we have implemented a custom Promise object in JavaScript to read the content of a file, write the content to another file, and delete the original file. We have used the fs module to read, write, and delete files. We have created three functions readFileWithPromise(), writeFileWithPromise(), and deleteFileWithPromise() to read, write, and delete files with promises. We have used the then() method to chain multiple asynchronous operations together and the catch() method to handle errors. Finally, we have used the console.log() method to log the success and error messages.

// first then() block will be executed after the file reading is successful, second then() block will be executed after the file writing is successful, and third then() block will be executed after the file deletion is successful. If any error occurs during the file reading, writing, or deletion, the catch() block will be executed to handle the error.
