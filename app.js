// packages
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// initialize
const app = express();

// initialize middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// modules
const { sqlQuery } = require("./controllers");

// end-point
app.get("/", (req, res) => {
  res.send("Sql Server!");
});
app.get("/query", sqlQuery);

// server start
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server : port → ${port}`);
});
