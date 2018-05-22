
var mysql = require("./mysql_config");
var pool = mysql.pool;

module.exports = function (app) {

	app.get('/ohlc/:stockid', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' })

		var security_code = req.params.stockid;
		pool.getConnection(function (err, conn) {
			conn.query("call stock_eagle.ohlc(?)",
				[security_code],
				function (err, row, fields) {
					conn.release();
					if (err) { res.sendStatus(400); }
					res.end(JSON.stringify(row[0]));
				});
		})
	})

	app.get('/price_diff', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' });

		pool.getConnection(function (err, conn) {
			conn.query('call stock_eagle.wm_diff();',
				function (err, row, fields) {
					if (err) res.sendStatus(400);
					res.end(JSON.stringify(row[0]));
				});
		})
	})

	app.get('/div_yield', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' });

		var bound = req.query.bound
		if (isNaN(parseFloat(bound))) bound = 0;

		pool.getConnection(function (err, conn) {
			conn.query("call stock_eagle.div_yield(?);", [bound],
				function (err, row, fields) {
					if (err) res.sendStatus(400);
					res.end(JSON.stringify(row[0]));
				});
		})
	})

	app.get('/pe_ratio', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' })

		var bound = req.query.bound;
		if (isNaN(parseFloat(bound))) bound = 15;
		pool.getConnection(function (err, conn) {
			conn.query('call stock_eagle.pe_ratio(?);', [bound],
				function (err, row, fields) {
					if (err) throw err;

					res.end(JSON.stringify(row[0]));
				});
		})
	});
	
	app.get('/json_test', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		res.render('send', { csrfToken: req.csrfToken() })
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

	app.use(function (req, res, next) {
		res.status(400);
		// respond with html page
		if (req.accepts('html')) {
			res.render('400', { url: req.url });
			return;
		}
		// respond with json
		if (req.accepts('json')) {
			res.send({ error: 'Bad request' });
			return;
		}
		// default to plain-text. send()
		res.type('txt').send('Bad request');
	})
};
