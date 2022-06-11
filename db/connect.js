const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "bj6a8eb6qp3myiqmw8rg-mysql.services.clever-cloud.com",
  user: "u7gfd63y2imzqngt",
  password: "2NIuEfkGLcEU4WjtNmiP",
  database: "bj6a8eb6qp3myiqmw8rg",
  waitForConnections: true,
});

console.log(`Connection ID : ${connection.threadId}`);

module.exports = connection;
