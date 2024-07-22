const process = require('process');

export default function displayMessage(message) {
  process.stdout.write(message);
  process.stdout.write('\n');
};
