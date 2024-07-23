const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    await countStudents(process.argv[2]);
  } catch (error) {
    res.write(error.message);
  }
  res.end();
});

app.listen(1245);

module.exports = app;
