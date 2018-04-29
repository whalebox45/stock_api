var connection = require('./mysql_config');
connection.con.connect();

security_code = "1234";

connection.query("select date ,security_code ,name ," +
    "open_price ,highest_price ,lowest_price ,closing_price " +
    "from stock_2018"+" where security_code = " + security_code + ";",
    function(err, row, fields) {
      if (err) throw err;
      console.log(JSON.stringify(row));
    }
);

connection.end();
