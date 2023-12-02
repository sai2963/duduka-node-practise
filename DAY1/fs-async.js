const { readFile, writeFile } = require("fs");

// Read the first file
readFile("./content/subfolder/first.txt", "utf-8", (err, firstResult) => {
  if (err) {
    console.error("Error reading first file:", err);
    return;
  }
  const first = firstResult;
  console.log(firstResult);
  // Read the second file inside the callback of the first readFile
  readFile("./content/subfolder/text.txt", "utf-8", (err, secondResult) => {
    if (err) {
      console.error("Error reading second file:", err);
      return;
    }
    const second = secondResult;
    console.log(secondResult);
    // Combine the contents of the first and second files
    const combinedContent = `here is the result ${first}, ${second}`;

    // Write the combined content to the third file
    writeFile("./content/subfolder/third.txt", combinedContent, (err) => {
      if (err) {
        console.error("Error writing to third file:", err);
        return;
      }

      console.log("Write operation successful");
    });
    console.log("done");
  });
});
