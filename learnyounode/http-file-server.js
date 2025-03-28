const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  readStream.pipe(res);

  readStream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Error reading the file');
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
