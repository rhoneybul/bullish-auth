
var http = require('http');
var fileSystem = require('fs');
var express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
// var mongoose = require("mongoose");

app.use(morgan('combined'))
app.use(bodyParser.json({ type: "*/*" }))
router(app)

const port = 8080

const server = http.createServer(app);

server.listen(port);

console.log(`server listening on port: ${port}`)


