const process = require('process');

module.exports = function displayMessage(message) {
  process.stdout.write(message);
  process.stdout.write('\n');
};
