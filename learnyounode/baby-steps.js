let total = 0;

for (let i = 2; i < process.argv.length; i++) {
  total += +process.argv[i];  // Use + to convert the string to a number
}

console.log(total);
