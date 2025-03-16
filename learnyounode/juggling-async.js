const http = require('http');

const urls = process.argv.slice(2);
let results = [];
let completedRequests = 0;

function getData(index) {
  http.get(urls[index], (response) => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      results[index] = data;
      completedRequests++;

      if (completedRequests === urls.length) {
        results.forEach(result => {
          console.log(result);
        });
      }
    });

    response.on('error', (err) => {
      console.error(err);
    });
  });
}

for (let i = 0; i < urls.length; i++) {
  getData(i);
}
