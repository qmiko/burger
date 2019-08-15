// MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  conection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    user: "pg60i8allmfvdx8v",
    password: "xekct1o8aygethxk",
    database: "dg8ano2g4dcb3qvf"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export Connection
module.exports = connection;