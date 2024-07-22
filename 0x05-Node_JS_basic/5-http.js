const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const app = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    try {
      const studentData = await countStudents('database.csv');
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const hostname = 'localhost';
const port = 1245;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
