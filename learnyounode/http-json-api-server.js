const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime') {
    const isoDate = query.iso;
    const date = new Date(isoDate);
    const result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.end(JSON.stringify(result));
  } else if (pathname === '/api/unixtime') {
    const isoDate = query.iso;
    const date = new Date(isoDate);
    const result = { unixtime: date.getTime() };
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
