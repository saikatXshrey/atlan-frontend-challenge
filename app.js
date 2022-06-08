// packages
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// initialize
const app = express();

// initialize middleware
morgan("tiny");
app.use(cors());

// modules
const connectDB = require("./db/connect");

// server start
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server : http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
