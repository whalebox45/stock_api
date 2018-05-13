var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

<<<<<<< HEAD
app.get('/ohlc/:stockid', function(req,res){
    security_code = req.params.stockid;
    db.query('select date,'+
    'open_price, highest_price, lowest_price, closing_price '+
    'from stock_2018 where security_code=? order by date;',[security_code],
    function(err,row,fields){
        if(err) throw err;
        res.end(JSON.stringify(row,null,' '));
    })
    
})


=======
>>>>>>> 2ab6029e5aad034b167f0196e5a5f04ca207e636
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  
  console.log("Web app listening at http://%s:%s", host, port)
})

