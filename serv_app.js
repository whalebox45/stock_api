var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var morgan = require('morgan');
const Ajv = require('ajv');
var cors = require('cors')

var app = express();


app.use(cors())

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next();
});

app.use(morgan(':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

require('./routes')(app);


var server = app.listen(7153,'163.13.127.53', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Web app listening at http://%s:%s", host, port)
})

