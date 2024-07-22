const process = require("process");

process.stdout.write("Welcome to Holberton School; what is your name?");
process.stdout.write("\n");

process.stdin.on("readable", function() {
    const chunk = process.stdin.read();

    if (chunk !== null) {
        process.stdout.write(`Your name is ${chunk}`);
    }
})


process.on('exit', () => {
    process.stdout.write("This important software is now closing\n");
})
