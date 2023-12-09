const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    // This loop will not work as intended. It will send multiple responses.
    // I'm assuming you want to send coordinates in the response, so I've modified it accordingly.
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i},${j}`);
     
      }
    }
    res.end("Passion should be the reason for success");
  } else {
    res.end(`
            <h1>Oops</h1>
            <p>We can't find the folder that you're searching for</p>
            <a href='/'>Back home</a>
        `);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
