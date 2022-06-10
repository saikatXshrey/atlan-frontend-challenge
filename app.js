// packages
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
const connection = require("./db/connect");
const { sqlQuery } = require("./controllers");

// end-point
app.get("/", (req, res) => {
  res.send("Sql Server!");
});
app.get("/query", sqlQuery);

// server start
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connection;
    app.listen(port, () => {
      console.log(`Server : http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// export -> heroku
module.exports = app;
