const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bj6a8eb6qp3myiqmw8rg-mysql.services.clever-cloud.com",
  user: "u7gfd63y2imzqngt",
  password: "2NIuEfkGLcEU4WjtNmiP",
  database: "bj6a8eb6qp3myiqmw8rg",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Connection ID : ${connection.threadId}`);
});

module.exports = connection;
