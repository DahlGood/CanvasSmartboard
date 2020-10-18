
// set up express server
var express = require("express");
var app = express();
var port = process.env.PORT || '4334';
var server = app.listen(port);

console.log("Server: " + port);

app.get('/', (req,res) => {
    res.send('Welcome to our Smartboard.');
});

app.get('/randomroute', (req,res) => {
    res.send('Welcome to our Smartboard.');
});


exports.server = server;
