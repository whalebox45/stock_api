var mysql = require('mysql')
var login = require('./mysql_login')
var pool = mysql.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: login.userid,
	password: login.passwd,
	database: 'stock_eagle',
	timezone: 'Z',
	dateStrings: 'date'
});

exports.pool = pool;


