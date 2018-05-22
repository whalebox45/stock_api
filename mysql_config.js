var mysql = require('mysql')
var pool = mysql.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: 'stock_eagle',
	password: '',
	database: 'stock_eagle',
	timezone: 'Z',
	dateStrings: 'date'
});

exports.pool = pool;


