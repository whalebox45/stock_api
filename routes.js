
var mysql = require("./mysql_config");
var db = mysql.db;

module.exports = function(app){
	app.get('/pe_ratio', function(req,res){
		console.log('got the get');
		db.query('SELECT date,security_code, name,pe_ratio FROM stock_eagle.pepb_2018'+
		'where date = (SELECT distinct date from pepb_2018 order by date desc limit 1) and pe_ratio != 0'+
		'order by cast(pe_ratio as DECIMAL(5,2)) limit 10;',
		function(err,row,fields){
			if(err) throw err;
			res.end(JSON.stringify(row));
		})
	});

	app.get('/ohlc/:stockid', function(req,res){
		security_code = req.params.stockid;
		db.query('select date, security_code, name,'+
		'open_price, high_price, low_price, close_price '+
		'from stock_2018 where security_code=? ;',
		[security_code],
		function(err,row,fields){
			if(err) throw err;
			res.end(JSON.stringify(row));
		})
	})
};
