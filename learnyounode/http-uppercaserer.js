const http = require('http');
const through2Map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through2Map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
