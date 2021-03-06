
var http = require('http');
var fileSystem = require('fs');
var express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const morgan = require("morgan");
// var mongoose = require("mongoose")

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ type: "*/*" }))
routes(app)

const port = 8080

const server = http.createServer(app);

server.listen(port);

console.log(`server listening on port: ${port}`)


