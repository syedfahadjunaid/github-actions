console.log("Node.js is up and running!");

// A tiny web server using built-in modules
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from your new Node app!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
