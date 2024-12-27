const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper error handling, an unhandled exception could crash the server
  console.log(undefined.property); //Simulates an error
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});