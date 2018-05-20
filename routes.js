
var mysql = require("./mysql_config");
var db = mysql.db;

module.exports = function (app) {

	app.get('/ohlc/:stockid', function (req, res) {
		var security_code = req.params.stockid;
		db.query("call stock_eagle.ohlc(?)",
			[security_code],
			function (err, row, fields) {
				if (err) throw err;
				res.set({ 'content-type': 'application/json; charset=utf-8' })
				res.end(JSON.stringify(row[0]));
			});
	})

	app.get('/price_diff', function(req,res){
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		db.query('call stock_eagle.wm_diff();',
		function(err,row,fields){
			if(err) throw err;
			res.end(JSON.stringify(row[0]));
		});
	})

	app.get('/div_yield', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		db.query("call stock_eagle.div_yield();",
			function (err, row, fields) {
				if (err) throw err;
				res.end(JSON.stringify(row[0]));
			});
	})

	app.get('/pe_ratio', function (req, res) {
		var bound;
		if(!!req.query.bound) bound=req.query.bound;
		else bound=15;
		db.query('call stock_eagle.pe_ratio(?);',[bound],
			function (err, row, fields) {
				if (err) throw err;
				res.set({ 'content-type': 'application/json; charset=utf-8' })
				res.end(JSON.stringify(row[0]));
			});
	});

	app.get('/json_test', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify({ "test": 'ok' }));
		console.log(req.body);
	})

	app.all('*', function (req, res) {
		res.sendStatus(404);
	});

	app.use(function (req, res, next) {
		res.status(404);

		// respond with html page
		if (req.accepts('html')) {
			res.render('404', { url: req.url });
			return;
		}

		// respond with json
		if (req.accepts('json')) {
			res.send({ error: 'Not found' });
			return;
		}

		// default to plain-text. send()
		res.type('txt').send('Not found');
	});
};
