const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!');
});
