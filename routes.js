
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
					if (err) { conn.release(); res.sendStatus(400); return; }
					conn.release();
					var sn = { 'data': (row[0]) };
					res.end(JSON.stringify(sn));
				});
		})
	})

	app.get('/wm_diff', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' });

		var limit = req.query.limit
		var cate = req.query.cate
		var query_type = 0

		if (isNaN(parseInt(limit))) limit = 10;
		if (isNaN(parseInt(cate))) query_type = 1;


		pool.getConnection(function (err, conn) {
			switch (query_type) {
				case 0:
					conn.query('call stock_eagle.week_month_diff_cc(?,?)',
						[limit, cate], function (err, row, fields) {
							if (err) { conn.release(); res.sendStatus(400); return; }
							conn.release();
							var sn = { 'data': (row[0]) };
							res.end(JSON.stringify(sn));
						});
					break;

				case 1:
					conn.query('call stock_eagle.week_month_diff(?);', [limit],
						function (err, row, fields) {
							if (err) { conn.release(); res.sendStatus(400); return; }
							conn.release();
							var sn = { 'data': (row[0]) };
							res.end(JSON.stringify(sn));
						});
					break;
			}
		})

	})

	app.get('/trade_vol_diff', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' })

		var limit = req.query.limit
		var cate = req.query.cate
		var query_type = 0

		if (isNaN(parseInt(limit))) limit = 10;
		if (isNaN(parseInt(cate))) query_type = 1;

		pool.getConnection(function (err, conn) {
			switch (query_type) {
				case 0:
					conn.query('call trade_vol_cc(?,?)', [limit, cate], function (err, row, fields) {
						if (err) { conn.release(); res.sendStatus(400); return; }
						conn.release();
						var sn = { 'data': (row[0]) };
						res.end(JSON.stringify(sn));
					});
					break;
				case 1:
					conn.query('call trade_vol(?)', [limit],
						function (err, row, fields) {
							if (err) { conn.release(); res.sendStatus(400); return; }
							conn.release();
							var sn = { 'data': (row[0]) };
							res.end(JSON.stringify(sn));
						});
					break;
			}
		})
	})

	app.get('/div_yield', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' });

		var bound = req.query.bound
		var limit = req.query.limit
		var cate = req.query.cate
		var query_type = 0;

		if (isNaN(parseFloat(bound))) bound = 4.5
		if (isNaN(parseInt(limit))) limit = 10;
		if (isNaN(parseInt(cate))) query_type = 1;

		pool.getConnection(function (err, conn) {
			switch (query_type) {
				case 0:
					conn.query("call stock_eagle.div_yield_cc(?,?,?)", [bound, limit, cate],
						function (err, row, fields) {
							if (err) { conn.release(); res.sendStatus(400); return; }
							conn.release();
							var sn = { 'data': (row[0]) };
							res.end(JSON.stringify(sn));
						})
					break;
				case 1:
					conn.query("call stock_eagle.div_yield(?,?);", [bound, limit],
						function (err, row, fields) {
							if (err) { conn.release(); res.sendStatus(400); return; }
							conn.release();
							var sn = { 'data': (row[0]) };
							res.end(JSON.stringify(sn));
						});
					break;

			}

		})
	})

	app.get('/dp_ratio' , function(req,res){
		res.set({ 'content-type': 'application/json; charset=utf-8' })

		var bound = req.query.bound;
		var limit = req.query.limit;
		var cate = req.query.cate;
		var query_type = 0;

		if (isNaN(parseFloat(bound))) bound = 85;
		if (isNaN(parseInt(limit))) limit = 10;
		if (isNaN(parseInt(cate))) query_type = 1;

		pool.getConnection(function (err, conn) {

			switch (query_type) {
				case 0:
					conn.query('call stock_eagle.dp_ratio_cc(?,?,?);', [bound, limit, cate], function (err, row, fields) {
						if (err) { conn.release(); res.sendStatus(400); return; }
						conn.release();
						var sn = { 'data': (row[0]) };
						res.end(JSON.stringify(sn));
					});
					break;
				case 1:
					conn.query('call stock_eagle.dp_ratio(?,?);', [bound, limit], function (err, row, fields) {
						if (err) { conn.release(); res.sendStatus(400); return; }
						conn.release();
						var sn = { 'data': (row[0]) };
						res.end(JSON.stringify(sn));
					});
					break;
			}
		})
	});

	app.get('/pe_ratio', function (req, res) {

		res.set({ 'content-type': 'application/json; charset=utf-8' })

		var bound = req.query.bound;
		var limit = req.query.limit;
		var cate = req.query.cate;
		var query_type = 0;

		if (isNaN(parseFloat(bound))) bound = 15;
		if (isNaN(parseInt(limit))) limit = 10;
		if (isNaN(parseInt(cate))) query_type = 1;

		pool.getConnection(function (err, conn) {

			switch (query_type) {
				case 0:
					conn.query('call stock_eagle.pe_ratio_cate(?,?,?);', [bound, limit, cate], function (err, row, fields) {
						if (err) { conn.release(); res.sendStatus(400); return; }
						conn.release();
						var sn = { 'data': (row[0]) };
						res.end(JSON.stringify(sn));
					});
					break;
				case 1:
					conn.query('call stock_eagle.pe_ratio(?,?);', [bound, limit], function (err, row, fields) {
						if (err) { conn.release(); res.sendStatus(400); return; }
						conn.release();
						var sn = { 'data': (row[0]) };
						res.end(JSON.stringify(sn));
					});
					break;
			}
		})
	});

	app.get('/json_test', function (req, res) {
		res.set({ 'content-type': 'application/json; charset=utf-8' });
		res.set({ "Connection": "close" });
		res.end(JSON.stringify({ "test": 'ok' }));
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
