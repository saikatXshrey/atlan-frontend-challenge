const { StatusCodes } = require("http-status-codes");
const connection = require("../db/connect");

const sqlQuery = (req, res) => {
  const { q } = req.query;

  connection.query(q, (error, results) => {
    // error handling
    if (error) {
      console.log(error);
    }

    // result
    res.status(StatusCodes.OK).json(results);
  });
};

module.exports = sqlQuery;
