const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "atlan_db",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Connected as id : ${connection.threadId}`);
});

module.exports = connection;
