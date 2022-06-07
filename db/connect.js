const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bl4s6g3fsdy5w14hxrnw-mysql.services.clever-cloud.com",
  user: "u3d5ybvswlz8o9ub",
  password: "Y7ByB5NY05nIA3NDAkc0",
  database: "bl4s6g3fsdy5w14hxrnw",
});

connection.connect();

module.exports = connection;
