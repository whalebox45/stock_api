var mysql = new require('mysql')
var db_options ={
	host: 'localhost',
	user: 'stock_eagle',
	password: 'hornia',
	database: 'stock_eagle',
	timezone: 'Z',
	dateStrings: 'date'
};
var db = null;
db = mysql.createConnection(db_options);
db.connect(function(err){
	if(err){
		console.error(err);
		return;
	}
	console.log("MySQL connect");
});

exports.db = db;


