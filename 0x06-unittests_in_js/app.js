const express = require('express');
const app = express();
const Utils = require('./utils');

app.get('/payment', (req, res) => {
    const total = Utils.calculateNumber('SUM', 100, 20);
    res.send(`The total is: ${total}`);
});

module.exports = app;

