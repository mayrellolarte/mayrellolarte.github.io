const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const extFilter = process.argv[3];

mymodule(dirPath, extFilter, (err, files) => {
  if (err) {
    return console.error('There was an error:', err);
  }

  files.forEach(file => {
    console.log(file);
  });
});
