import http from 'node:http';

const PORT = 8000;

// Create a local server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(PORT, () => {
  console.log(`[server] server is listening on port: ${PORT}`);
});


