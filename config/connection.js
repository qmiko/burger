// MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  conection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
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