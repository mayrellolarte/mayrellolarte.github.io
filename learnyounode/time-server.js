const net = require('net');

const server = net.createServer((socket) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hour = currentDate.getHours().toString().padStart(2, '0');
  const minute = currentDate.getMinutes().toString().padStart(2, '0');

  const timeString = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.write(timeString);
  socket.end();
});

const port = process.argv[2];

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
