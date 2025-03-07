// Task
// 1. Read content of hello.txt file using fs.readFile() method.
// 2. Create a new file named backup.txt using fs.writeFile() method.
// 3. Write the content of hello.txt to backup.txt file.
// 4. Delete hello.txt file using fs.unlink() method.

const fs = require("fs");

console.log("Start");

fs.readFile("hello.txt", "utf-8", (err, content) => {
  if (err) {
    console.log("An error occurred in reading file content", err);
    return;
  }
  console.log("File reading successful", content);

  fs.writeFile("backup.txt", content, (err) => {
    if (err) {
      console.log("An error occurred in writing file content", err);
      return;
    }
    console.log("File writing successful");

    fs.unlink("hello.txt", (err) => {
      if (err) {
        console.log("An error occurred in deleting file", err);
        return;
      }
      console.log("File deletion successful");
    });
  });
});

console.log("End");

// Output
// Start
// End
// File reading successful Hello, World!
// File writing successful
// File deletion successful

// In the above example, we have read the contents of the hello.txt file using the fs.readFile() method.
// The contents of the file are written to the backup.txt file using the fs.writeFile() method.
// The hello.txt file is deleted using the fs.unlink() method.
// The code does not block the execution while reading, writing, and deleting the file.
// The code continues to execute other statements while the file operations are in progress.
// The callback functions are called when the file operations are completed.
// The code is executed in a non-blocking manner.

// This is an example of callback hell.
// Callback hell is a situation in which multiple callback functions are nested within one another.

// Callback hell occurs when there is a triangle of doom or pyramid of doom means multiple callback functions are nested within one another.
// It becomes difficult to read and maintain the code.
// The code becomes complex and hard to understand.
// The code becomes difficult to debug and test.

// To avoid callback hell, we can use promises or async/await.
