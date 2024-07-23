const express = require("express");
const countStudents = require("./3-read_file_async");
const args = process.argv.slice(2);

const databasePath = args[0] || 'database.csv';

const app = express();
const port = 1245;


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
    res.setHeader("Content-Type", "text/plain");

    try{
            const data = await countStudents(databasePath);
            res.send(`This is the list of our students\n${data}`);
    } catch (error) {
        res.send(error);
    }

})

app.listen(port, () => {
    
});


module.exports = app;