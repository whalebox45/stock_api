var config = require("mysql_config.js");
var db = config.db;


security_code = "1234";

db.query("select date," +
    "open_price ,highest_price ,lowest_price ,closing_price " +
    "from stock_2018"+" where security_code = " + security_code + " order by date;",
    function(err, row, fields) {
      if (err) throw err;
      console.log(JSON.stringify(row));
    }
);
