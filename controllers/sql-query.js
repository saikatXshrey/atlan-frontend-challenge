const { StatusCodes } = require("http-status-codes");
const connection = require("../db/connect");

const sqlQuery = async (req, res) => {
  const { q, limit } = req.query;

  let query = q;

  // remove ';'
  if (query.includes(";")) {
    query = query.substring(0, query.length - 1);
  }

  // add limit
  if (limit) {
    query = `${query} limit ${limit};`;
  }

  await connection.query(query, (error, results) => {
    // error handling
    if (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Error in SQL syntax" });
      return;
    }

    // result
    res.status(StatusCodes.OK).json(results);
  });
};

module.exports = sqlQuery;
