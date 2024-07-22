const process = require('process');

export function displayMessage(message) {
    process.stdout.write(message);
    process.stdout.write("\n");
}