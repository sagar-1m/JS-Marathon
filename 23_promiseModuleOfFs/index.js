// Node fs module of fs/promises
// fs/promises module is a built-in module in Node.js that provides promise-based versions of the fs module methods.

console.log("Start");

const fsV2 = require("fs/promises");

// Reading a file using fs/promises
fsV2
  .readFile("hello.txt", "utf-8")
  .then((content) => {
    fsV2.writeFile("backup.txt", content);
  })
  .then(() => fsV2.unlink("hello.txt"))
  .catch((err) => {
    console.error(err);
  });

console.log("End");

// In the above code, we are using the fs/promises module to read the content of the hello.txt file and write it to the backup.txt file. After writing the content to the backup.txt file, we are deleting the hello.txt file using the unlink method. The unlink method is used to delete a file. If any error occurs during the process, it will be caught by the catch block.

// The fs/promises module is used to perform file operations asynchronously using promises. It provides promise-based versions of the fs module methods. The fs/promises module is available in Node.js version 10.0.0 and later. It is recommended to use the fs/promises module for file operations in Node.js applications.

// This is how we can use the fs/promises module to perform file operations asynchronously using promises in Node.js.
