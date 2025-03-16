const http = require('http');

const url = process.argv[2];

let dataString = '';

http.get(url, (response) => {
  response.setEncoding('utf8');

  
  response.on('data', (chunk) => {
    dataString += chunk;
  });

  
  response.on('end', () => {
    console.log(dataString.length);  
    console.log(dataString);         
  });

  response.on('error', (err) => {
    console.error(err);
  });
});
