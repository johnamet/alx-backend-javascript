const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

const hostname = 'localhost';
const port = 1245;

app.listen(port, hostname, () => {
});
