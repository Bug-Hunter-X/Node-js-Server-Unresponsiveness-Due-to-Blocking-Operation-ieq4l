const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  for (let i = 0; i < 1000000000; i++) {
    // Do something
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});