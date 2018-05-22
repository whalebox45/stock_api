var mysql = new require('mysql')
var db_options = {
	host: 'localhost',
	user: 'stock_eagle',
	password: '',
	database: 'stock_eagle',
	timezone: 'Z',
	dateStrings: 'date'
};
var db = null;

function handleDisconnect() {
	db = mysql.createConnection(db_options);


	db.connect(function (err) {
		if (err) {
			console.error('error when connecting to db:', err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	db.on('error', function (err) {
		cnosole.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect();

exports.db = db;


