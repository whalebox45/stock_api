var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/ohlc:stockid', function(req,res){


})

app.get('/listUsers', function (req, res) {
   fs.readFile("./" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/listUser/:uuid', function (req, res) {
   // First read existing users.
   fs.readFile( "./" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.uuid] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})


app.post('/addUser', function (req, res) {
     var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = 'Name: '+ uname +', PROF: '+prof+' UUID: '+uuid+' PASS: '+ passwd;
     console.log( str );
     res.end(str);
})

app.put('/updateUser', function (req, res) {
   var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = 'UPDATE: Name: '+ uname +', PROF: '+prof+' UUID: '+uuid+' PASS: '+ passwd;
     console.log( str );
     res.end(str);
})

app.delete('/deleteUser/:id', function (req, res) {

})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

