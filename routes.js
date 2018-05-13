
var mysql = require("./mysql_config");
var db = mysql.db;

module.exports = function(app){
	app.get('/pe_ratio', function(req,res){
		console.log('got the get');
		res.end();
	});

	app.get('/ohlc/:stockid', function(req,res){
		security_code = req.params.stockid;
		db.query('select date, security_code, name,'+
		'open_price, high_price, low_price, close_price '+
		'from stock_2018 where security_code=? ;',[security_code],
		function(err,row,fields){
			if(err) throw err;
			res.end(JSON.stringify(row));
		})
	})
};
