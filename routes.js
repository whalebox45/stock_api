
var mysql = require("./mysql_config");
var db = mysql.db;

module.exports = function (app) {

	app.get('/div_yield', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		db.query('SELECT date, security_code,name,dividend_yield FROM stock_eagle.pepb_2018 ' +
			'WHERE date = (SELECT DISTINCT DATE FROM pepb_2018 ORDER BY date DESC LIMIT 1) ' +
			'AND dividend_yield > 0 ' +
			'ORDER BY cast(dividend_yield AS DECIMAL(5,2)) DESC LIMIT 10;',
			function (err, row, fields) {
				if (err) throw err;
				res.end(JSON.stringify(row));
			});
	})

	app.get('/json_test', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify({ test: 'ok' }));
		console.log(req.body);
	})

	app.get('/pe_ratio', function (req, res) {
		console.log(req.query.category);
		db.query('SELECT date, security_code, name, pe_ratio FROM stock_eagle.pepb_2018 ' +
			'WHERE date = (SELECT distinct date FROM pepb_2018 ORDER BY date DESC LIMIT 1) AND pe_ratio != 0 ' +
			'ORDER BY cast(pe_ratio as DECIMAL(5,2)) LIMIT 10;',
			function (err, row, fields) {
				if (err) throw err;
				res.set({ 'content-type': 'application/json; charset=utf-8' })
				res.end(JSON.stringify(row));
			});
	});

	app.get('/ohlc/:stockid', function (req, res) {
		security_code = req.params.stockid;
		db.query('select date, security_code, name,' +
			'open_price, high_price, low_price, close_price ' +
			'from stock_2018 where security_code=? ;',
			[security_code],
			function (err, row, fields) {
				if (err) throw err;
				res.set({ 'content-type': 'application/json; charset=utf-8' })
				res.end(JSON.stringify(row, null, ' '));
			});
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
